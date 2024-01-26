/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.axml"],
  theme: {
    extend: {
      spacing: {
        rpx: '1rpx',
        '2rpx': '2rpx',
        0: '0',
        0.5: '4rpx',
        1: '8rpx',
        1.5: '12rpx',
        2: '16rpx',
        2.5: '20rpx',
        3: '24rpx',
        3.5: '28rpx',
        4: '32rpx',
        5: '40rpx',
        6: '48rpx',
        7: '56rpx',
        8: '64rpx',
        9: '72rpx',
        10: '80rpx',
        11: '88rpx',
        12: '96rpx',
        14: '112rpx',
        16: '128rpx',
        20: '160rpx',
        24: '192rpx',
        28: '224rpx',
        32: '256rpx',
      },
      blur: {
        0: '0',
        none: '0',
        sm: '8rpx',
        DEFAULT: '16rpx',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      borderRadius: {
        none: '0',
        sm: '4rpx',
        DEFAULT: '8rpx',
        md: '12rpx',
        lg: '16rpx',
        xl: '24rpx',
        '2xl': '32rpx',
        '3xl': '48rpx',
        full: '99999rpx',
      },
      borderWidth: {
        DEFAULT: '2rpx',
        0: '0',
        4: '4rpx',
        8: '8rpx',
        16: '16rpx',
      },
      boxShadow: {
        sm: '0 2rpx 4rpx 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 2rpx 6rpx 0 rgb(0 0 0 / 0.1), 0 2rpx 4rpx -2rpx rgb(0 0 0 / 0.1)',
        md: '0 8rpx 6px -2rpx rgb(0 0 0 / 0.1), 0 4rpx 8rpx -4rpx rgb(0 0 0 / 0.1)',
        lg: '0 20rpx 15px -6rpx rgb(0 0 0 / 0.1), 0 8rpx 6px -8rpx rgb(0 0 0 / 0.1)',
        xl: '0 40rpx 50rpx -10rpx rgb(0 0 0 / 0.1), 0 16rpx 20rpx -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 50rpx 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 4rpx 8rpx 0 rgb(0 0 0 / 0.05)',
        none: 'none',
      },
      dropShadow: {
        sm: '0 2rpx 2rpx rgb(0 0 0 / 0.05)',
        DEFAULT: ['0 2rpx 4rpx rgb(0 0 0 / 0.1)', '0 2rpx 2rpx rgb(0 0 0 / 0.06)'],
        md: ['0 8rpx 6rpx rgb(0 0 0 / 0.07)', '0 4rpx 4rpx rgb(0 0 0 / 0.06)'],
        lg: ['0 20rpx 16rpx rgb(0 0 0 / 0.04)', '0 8rpx 6rpx rgb(0 0 0 / 0.1)'],
        xl: ['0 40rpx 26rpx rgb(0 0 0 / 0.03)', '0 16rpx 10rpx rgb(0 0 0 / 0.08)'],
        '2xl': '0 50rpx 50rpx rgb(0 0 0 / 0.15)',
        none: '0 0 #0000',
      },
      fontSize: {
        xs: ['24rpx', { lineHeight: '32rpx' }],
        sm: ['28rpx', { lineHeight: '40rpx' }],
        base: ['32rpx', { lineHeight: '48rpx' }],
        lg: ['36rpx', { lineHeight: '56rpx' }],
        xl: ['40rpx', { lineHeight: '56rpx' }],
        '2xl': ['48rpx', { lineHeight: '64rpx' }],
        '3xl': ['60rpx', { lineHeight: '72rpx' }],
        '4xl': ['72rpx', { lineHeight: '80rpx' }],
        '5xl': ['96rpx', { lineHeight: '1' }],
        '6xl': ['120rpx', { lineHeight: '1' }],
        '7xl': ['144rpx', { lineHeight: '1' }],
        '8xl': ['192rpx', { lineHeight: '1' }],
        '9xl': ['256rpx', { lineHeight: '1' }],
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        3: '24rpx',
        4: '32rpx',
        5: '40rpx',
        6: '48rpx',
        7: '56rpx',
        8: '64rpx',
        9: '72rpx',
        10: '80rpx',
      },
      outlineOffset: {
        0: '0',
        2: '2rpx',
        4: '4rpx',
        8: '8rpx',
        16: '16rpx',
      },
      outlineWidth: {
        0: '0',
        2: '2rpx',
        4: '4rpx',
        8: '8rpx',
        16: '16rpx',
      },
      ringOffsetWidth: {
        0: '0',
        2: '2rpx',
        4: '4rpx',
        8: '8rpx',
        16: '16rpx',
      },
      ringWidth: {
        DEFAULT: '6rpx',
        0: '0',
        2: '2rpx',
        4: '4rpx',
        8: '8rpx',
        16: '16rpx',
      },
    },
  },
  plugins: [],
}
