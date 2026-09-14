/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Paleta de marca (tierra cálida / artesanal)
				// Crema y beige — fondos
				'dust-grey': {
					DEFAULT: '#bfb294',
					100: '#2c241a',
					200: '#4e4432',
					300: '#75694f',
					400: '#9c8f70',
					500: '#bfb294',
					600: '#cec3aa',
					700: '#ddd4bf',
					800: '#e9e1d0',
					900: '#f2e8d9',
				},
				// Avena / arena cálida — tintes suaves
				'dry-sage': {
					DEFAULT: '#c0ac82',
					100: '#2e2517',
					200: '#55462c',
					300: '#7c6a45',
					400: '#a08a5e',
					500: '#c0ac82',
					600: '#b09b72',
					700: '#c8b68f',
					800: '#dccdb0',
					900: '#ede3d0',
				},
				// Arcilla / tan cálido — productos y acentos
				fern: {
					DEFAULT: '#a88663',
					100: '#2a1f13',
					200: '#463522',
					300: '#6a5437',
					400: '#8c7150',
					500: '#a88663',
					600: '#b28e68',
					700: '#ccae8e',
					800: '#dec7a8',
					900: '#efe1cc',
				},
				// Oliva profundo — iconos y detalles decorativos (#4A5A3A)
				'hunter-green': {
					DEFAULT: '#4a5a3a',
					100: '#10150d',
					200: '#1c2315',
					300: '#2b341f',
					400: '#3a452c',
					500: '#4a5a3a',
					600: '#61724e',
					700: '#84957b',
					800: '#adbca5',
					900: '#dde4d8',
				},
				// Café oscuro — texto y logo (#3A2E22)
				'pine-teal': {
					DEFAULT: '#3a2e22',
					100: '#19130c',
					200: '#30251a',
					300: '#5a4a38',
					400: '#7a6a57',
					500: '#9a8a74',
					600: '#b3a38d',
					700: '#c9bba6',
					800: '#ddd2c0',
					900: '#ece4d4',
				},
				// Terracota quemado — botones y CTAs (#C17A4E)
				terracotta: {
					DEFAULT: '#c17a4e',
					100: '#2b160a',
					200: '#4f2712',
					300: '#743d1d',
					400: '#985728',
					500: '#b56a3c',
					600: '#a9643a',
					700: '#d09262',
					800: '#e4bb9b',
					900: '#f4e2d2',
				},
				cream: '#f2e8d9',
				ecru: '#fffdf8',
			},
			fontFamily: {
				serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
				sans: ['"Jost"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
			},
			letterSpacing: {
				widest2: '0.2em',
				widest3: '0.25em',
			},
			borderRadius: {
				'4xl': '2rem',
				'5xl': '2.5rem',
			},
			boxShadow: {
				soft: '0 20px 50px -24px rgba(58, 46, 34, 0.25)',
				lift: '0 32px 64px -32px rgba(58, 46, 34, 0.35)',
				glow: '0 12px 40px -12px rgba(193, 122, 78, 0.5)',
			},
		},
	},
	plugins: [],
};