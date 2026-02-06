module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enables dark mode support
  theme: {
    extend: {
      colors: {
        primary: '#6d28d9', // Vibrant Purple
        secondary: '#9333ea',
        accent: '#f59e0b',  // Amber accent for highlights
        dark: '#0d0d0d',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'], // Modern heading font
      },
      keyframes: {
        // Floating Animation for Particles
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },

        // Shimmer Effect
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },

        // Gradient Morphing Animation
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },

        // Smooth Fade In
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        shimmer: 'shimmer 1.5s infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        fadeIn: 'fadeIn 0.8s ease forwards',
      },
      boxShadow: {
        glow: '0 0 25px rgba(109, 40, 217, 0.6)',
      },
    },
  },
  plugins: [],
};
