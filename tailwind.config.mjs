/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Modern Dark Premium Palette
				primary: '#2dd4bf', // Teal-400
				secondary: '#a855f7', // Purple-500
				dark: '#0f172a', // Slate-900
				'dark-lighter': '#1e293b', // Slate-800
				'gray-light': '#94a3b8', // Slate-400
				// Keeping legacy names for compatibility during refactor, mapped to new palette
				'azul': '#2dd4bf', 
				'fondo': '#0f172a',
				'amarillo': '#fbdd62',
				'rojo': '#ff5380',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'slide-up': 'slideUp 0.5s ease-out forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
}
