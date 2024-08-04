import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import { withUt } from "uploadthing/tw";
 
export default withUt({
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        backgroundGray: '#1c1917',
        navGray: '#fb7185'
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}) satisfies Config;
