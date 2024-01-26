import fs from "node:fs/promises";
import path from "node:path";

import glob from "fast-glob";
import { execa } from "execa";
import esbuild from "esbuild";

import { exists } from "./utils";
import { srcDir, distDir } from './const';

buildTS();
buildCopy();
buildAllCss();

export function buildTS(files?: string[]) {
  files = files || glob
    .sync(`**/*.ts`, {
      cwd: srcDir,
      absolute: true,
    })
  
  esbuild.build({
    entryPoints: files,
    outbase: srcDir,
    outdir: distDir,
  });
}

export async function buildCopy(files?: string[]) {
  files = files || glob
    .sync([`**/*`, `!**/*.ts`, `!**/*.acss`], {
      cwd: srcDir,
      absolute: true,
    })

  for (const file of files) {
    const dist = path.resolve(distDir, path.relative(srcDir, file));
    const dir = path.dirname(dist);
    if (!(await exists(dir))) {
      await fs.mkdir(dir, { recursive: true });
    }
    await execa("cp", [file, dist]);
  }
}

export async function buildAllCss(files?: string[]) {
  files = files || glob.sync(`**/*.acss`, {
    cwd: srcDir,
    absolute: true,
  });
  for (const file of files) {
    buildCss(file);
  }
}

export async function buildCss(file: string) {
  execa('tailwindcss', [
    '-i',
    file,
    '-o',
    path.resolve(distDir, path.relative(srcDir, file)),
  ]).stdout?.pipe(process.stdout);
}
