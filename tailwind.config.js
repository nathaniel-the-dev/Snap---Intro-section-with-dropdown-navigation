const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./index.html'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '0rem',
				md: '5rem',
			},
		},
		extend: {
			colors: {
				'almost-white': '#fafafa',
				'medium-gray': '#696969',
				'almost-black': '#141414',
			},
			fontSize: {
				base: '18px',
			},
			fontFamily: {
				sans: ["'Epilogue'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
