import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'bluefade': 'radial-gradient(ellipse at left, #758DFF, #363AF5)',
        'purplefade':'linear-gradient(90deg #5F32F6,#3AD1CC)'
      },
      borderColor: {
        border: "hsl(var(--border))",
      },
      keyframes: {
        "fade-in-left": {
                    "0%": {
                        opacity: "0",
                        transform: "translate3d(-100%, 0, 0)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate3d(0, 0, 0)",
                    },
                },
        "accordion-down": {
          from: {height: "0"},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0"},
        },
      },
      fontFamily: {
        body: ['Arial'],
        code: ['Inconsolata'],
        display: ['Palladio'],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow:{
        'purple':'0px -1px 40px 1px rgba(95,50,246,0.2)',
      },
      screens: {
        "mobile": {'max':'479px'},
        "tablet": {'min':'768px','max':'900x'},
        "sm":{'min':'1024px','max':'1280px'},
        "md": {'min':'1281px','max':'1440px'},
        "lg": {'min':'1441px'},
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

//TODO: Consider removing unnecessary parts of this
// module.exports = {
//   content: [
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//     },
//   },
//   plugins: [
//   ],
//   config
// }

export default config