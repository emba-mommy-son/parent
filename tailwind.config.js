/** @type {import('tailwindcss').Config} */
// 여기 수정하면 constants/Colors.ts도 바꿔줘야 함!

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        my_white: '#FFF',
        my_black: '#000',
        my_primary: '#8071FC',
        my_secondary: '#FFA321',
        my_background: '#F2F3F6',
        my_danger: '#F30707',
        my_gray_0: '#E9ECEF',
        my_gray_1: '#DEE2E6',
        my_gray_2: '#ADB5BD',
        my_gray_3: '#868E96',
        my_gray_4: '#495057',
        my_gray_5: '#343A50',
      },
    },
  },
  plugins: [],
};
