/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./Components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'azul': '#0bceaf',
				'fondo': '#2c2d30',
				'amarillo': '#fbdd62',
				'rojo': '#ff5380',
				'texto_simple': 'rgba(255, 255, 255, 0.6)'
			},
		},
		screens: {
			'sm': '640px', // Cambia el valor a '640px'
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
		},
	},
	plugins: [],
}
