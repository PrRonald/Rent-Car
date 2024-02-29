const Warning = require('postcss/lib/warning');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#D6E4FD',
          200: '#AEC8FC ',
          300: '#85A8F8',
          400: '#658DF1',
          500: '#3563E9',
          600: '#2648CB',
          700: '#1A37A7',
          800: '#102587',
          900: '#0A196F',
        },
        success: {
          100: '#F5FCD2',
          200: '#E8FAA6',
          300: '#D3F178',
          400: '#BCE455',
          500: '#9CD323',
          600: '#7FB519',
          700: '#659711',
          800: '#4C7A0B',
          900: '#385506',
        },
        error: {
          100: '#FFE7D3',
          200: '#FFC8A6',
          300: '#FFA37A',
          400: '#FF7F59',
          500: '#FF4423',
          600: '#DB2719',
          700: '#B71112',
          800: '#930B16',
          900: '#7A0619',
        },
        warning: {
          100: '#FFF8D7',
          200: '#FFEFB0',
          300: '#FFE488',
          400: '#FFD96B',
          500: '#FFC73A',
          600: '#DBA32A',
          700: '#B7821D',
          800: '#936312',
          900: '#7A4D08',
        },
        information: {
          100: '#DCF3FF',
          200: '#BAE5FF',
          300: '#98D3FF',
          400: '#7EC2FF',
          500: '#54A6FF',
          600: '#3B81DB',
          700: '#2A60B7',
          800: '#1A4393',
          900: '#102E7A',
        },
        secondary: {
          100: '#DCF3FF',
          200: '#BAE5FF',
          300: '#98D3FF',
          400: '#7EC2FF',
          500: '#54A6FF',
          600: '#3B81DB',
          700: '#2A60B7',
          800: '#1A4393',
          900: '#102E7A',
        }
      },
    },
    plugins: [],
  }
}
