/** @type {import('tailwindcss').Config} */
// 여기 수정하면 constants/Colors.ts도 바꿔줘야 함!

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        my_primary: '#9D4BFF',
        my_secondary: '#211C2C',
        my_background: '#F2F3F6',
        my_pink: '#FD5FAE',
        my_yellow: '#FFB748',
        my_blishGreen: '#1CB6CC',
        my_navy: '#433A8A',
        my_danger: '#F30707',
        my_gray_100: '#FAFAFA',
        my_gray_300: '#F4F4F4',
        my_gray_500: '#EAEAEA',
        my_gray_700: '#DEDEDE',
      },
      layout: {
        my_padding: 10,
      },
    },
  },
  plugins: [],
};
