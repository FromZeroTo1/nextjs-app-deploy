/** @type {import('tailwindcss').Config} */

const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	black: twColors.black,
	white: twColors.white,
	primary: '#000005',
	gray: '#d9d9d9',
	'primary-green': '#bdf270',
	'secondary-green': '#83C12B',
	'dark-green': '#59754a',
	yellow: '#ffcc17',
	red: '#cf2b2b',
	'primary-violet': '#d4b0de',
	'secondary-violet': '#bd8fc7'
}

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors,
		extend: {
			zIndex: {
				1: 1,
				2: 2,
				3: 3,
			},
			fontSize: {
				xs: '13px',
				sm: '15px',
				base: '16px',
				lg: '17px',
				xl: '18px',
				'1.5xl': '20px',
				'2xl': '25px',
				'3xl': '26px',
				'4xl': '30px',
				'6xl': '40px',
				'7xl': '44px',
				'8xl': '64px',
				'9xl': '70px',
				'10xl': '140px'
			},
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transparent: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transparent: 'scale(1)'
					}
				},
				rolling: {
					'0%': {
						left: '0'
					},
					'100%': {
						left: '-100%'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
				rolling: 'rolling 5s linear infinite',
			},
			fontFamily: {
        'furore': ['Furore', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
      },
		}
	},
	plugins: []
}
