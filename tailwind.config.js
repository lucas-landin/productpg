/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       colors:{
        'primary-tx': '#b2b2b2',
        'orange-e': '#FF7D1A',
        'orange-p': '#FFEDE0',
        'dark-blue':'#1D2325',
        'grayish-blue':'#8e8e8e',
        'light-gray': '#F7F8FD',
       
       }
    },
  },
  plugins: [],
}
