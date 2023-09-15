/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'sm': '640px', // Cambia el valor a '640px'
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
		  },
	},
	plugins: [],
}
