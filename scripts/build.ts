import fs from "node:fs";
import path from "node:path";

import glob from "fast-glob";
import { execa } from "execa";
import esbuild from "esbuild";

import { exists } from "./utils";
import { srcDir, distDir } from './const';

// remove dist
fs.rmdirSync(distDir, { recursive: true });

// build dist
buildTS();
buildCopy();
buildAllCss();

export function buildTS(files?: string[]): void {
  files = files ?? glob
    .sync(`**/*.ts`, {
      cwd: srcDir,
      absolute: true,
    })
  
  void esbuild.build({
    entryPoints: files,
    outbase: srcDir,
    outdir: distDir,
  });
}

export function buildCopy(files?: string[]): void {
  files = files ?? glob
    .sync([`**/*`, `!**/*.ts`, `!**/*.acss`], {
      cwd: srcDir,
      absolute: true,
    });

  for (const file of files) {
    const dist = path.resolve(distDir, path.relative(srcDir, file));
    const dir = path.dirname(dist);
    const hasDist = exists(dir);
    if (!hasDist) {
      fs.mkdirSync(dir);
    }
    fs.copyFileSync(file, dist);
  }
}

export function buildAllCss(files?: string[]): void {
  files = files ?? glob
    .sync(`**/*.acss`, {
      cwd: srcDir,
      absolute: true,
    });
  for (const file of files) {
    buildCss(file);
  }
}

export function buildCss(file: string): void {
  execa('tailwindcss', [
    '-i',
    file,
    '-o',
    path.resolve(distDir, path.relative(srcDir, file)),
  ]).stdout?.pipe(process.stdout);
}
