import path from 'node:path';

export const root = path.resolve(__dirname, '..');
export const srcDir = path.resolve(root, 'src');
export const distDir = path.resolve(root, 'dist');
export const appCssPath = path.resolve(srcDir, 'app.acss');
