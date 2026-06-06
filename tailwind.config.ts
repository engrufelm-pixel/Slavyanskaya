import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Палитра «Premium Automotive Luxury» из ТЗ
        ink: '#0B0B0B', // базовый чёрный (off-black, не чистый #000)
        graphite: '#1A1A1A',
        charcoal: '#262626',
        gold: {
          DEFAULT: '#C8A86B', // основной золотой акцент
          soft: '#DBC49A',
          deep: '#A8854A',
        },
        wine: {
          DEFAULT: '#7E2630', // второй акцент — благородный oxblood (цвет кожи/нити)
          soft: '#9B3A44',
          deep: '#5C1A22',
        },
      },
      fontFamily: {
        // Заголовки — строгий гротеск без засечек (тот же Manrope, но плотнее/жирнее)
        display: ['var(--font-manrope)', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['var(--font-manrope)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      maxWidth: {
        container: '1400px',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        // Тёплая тень в тон фону, без «неонового» свечения
        lift: '0 30px 60px -25px rgba(0, 0, 0, 0.75)',
        gold: '0 18px 50px -20px rgba(200, 168, 107, 0.35)',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.2s infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
