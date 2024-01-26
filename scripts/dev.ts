import { EventEmitter } from 'node:events';
import chokidar from "chokidar";
import glob from "fast-glob";
import { execa } from "execa";

import { buildCopy, buildTS, buildCss } from "./build";
import { srcDir, appCssPath } from './const';

// Remove listening restrictions
EventEmitter.defaultMaxListeners = 0;

// build first
execa("npm", ["run", "build"], { cwd: '..' }).stdout?.pipe(process.stdout);

// watch ts
const onTsChange = (path: string) => {
  buildTS([path]);
};
chokidar
  .watch(
    glob.sync([`**/*.ts`], {
      cwd: srcDir,
      absolute: true,
    }),
  )
  .on('add', onTsChange)
  .on('change', onTsChange);

// watch xml for css
const onCssChange = (path: string) => {
  if (path.endsWith('.axml')) {
    buildCss(appCssPath);
  }
  if (path.endsWith('.acss')) {
    buildCss(path);
  }
};
chokidar
  .watch(
    glob.sync([`**/*.axml`, `**/*.acss`], {
      cwd: srcDir,
      absolute: true,
    })
)
  .on("add", onCssChange)
  .on("change", onCssChange);

// watch files for copy
const onFileChange = (path: string) => {
  buildCopy([path]);
};
chokidar
  .watch(
    glob.sync([`**/*`, `!**/*.ts`, `!**/*.acss`], {
      cwd: srcDir,
      absolute: true,
    }),
  )
  .on('add', onFileChange)
  .on('change', onFileChange);
