import fs, { type WatchEventType } from 'node:fs';
import path from 'node:path';

import { execa } from 'execa';

import { buildCopy, buildTS, buildCss } from './build';
import { srcDir, distDir, appCssPath } from './const';

// build first
execa('npm', ['run', 'build'], { cwd: '..' }).stdout?.pipe(process.stdout);

const onFileChange = (fullFilePath: string): void => {
  // ts
  if (fullFilePath.endsWith('.ts')) {
    buildTS([fullFilePath]);
    return;
  }
  // css
  if (fullFilePath.endsWith('.axml')) {
    buildCopy([fullFilePath]);
    buildCss(appCssPath);
    return;
  }
  if (fullFilePath.endsWith('.acss')) {
    buildCss(fullFilePath);
    return;
  }
  // others
  buildCopy([fullFilePath]);
}

const watchHandler = (eventType: WatchEventType, filePath: string): void => {
  const fullFilePath = path.resolve(srcDir, filePath);

  if (eventType === 'rename') {
    // 添加
    if (fs.existsSync(fullFilePath)) {
      onFileChange(fullFilePath);
    }
    // 删除
    else {
      // 删除dist中对应文件
      const dist = path.resolve(distDir, path.relative(srcDir, fullFilePath));
      fs.unlinkSync(dist);
    }
  }

  if (eventType === 'change') {
    onFileChange(fullFilePath);
  }
};

fs.watch(srcDir, { recursive: true }, watchHandler);
