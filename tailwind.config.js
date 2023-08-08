/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    screens: {
      desktop: { max: "1440px" },
      // => @media (max-width: 1440px) { ... }
  
      tablet: { max: "834px" },
      // => @media (max-width: 834px) { ... }
  
      mobile: { max: "375px" },
      // => @media (max-width: 375px) { ... }

      mobile1: { max: "360px" },
      // => @media (max-width: 360px) { ... }
  },
  },
  plugins: [],
}
