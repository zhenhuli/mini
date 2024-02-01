// tailwind 默认配置地址
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js

import extendConfig from './tailwind.extendConfig.js';

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.axml"],
  theme: {
    extend: {
      ...extendConfig
    },
  },
  plugins: [],
}
