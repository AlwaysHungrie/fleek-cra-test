import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	colors: {
		white: {
			'offWhite': '#F0F0F7',
		},
		black: '#1F1F33',
		brandText: '#4E4E6B',
		brandSubtext: '#7D7DA0',
		blue: {
			100: '#AFAFCC',
			500: '#2B67F6',
		},
		greenTextBackground: '#79F2C0',
		greenTextDark: '#36B37E',
		brandGrey:{
			500: '#F0F0F7',
			600: '#EBEBF3',
			700: '#DCDCE6',
		},
		red: '#F25A5A',
		brand: {
			500: '#1F1F33',
			600: '#3F3F53',
			700: '#5F5F72',
		},
		yellow: '#FFCE00',
		bannerGrey: '#F0F0F7'
	},
	sizes: {
		connectWallet: '41.5rem',
	},
	space: {
		4.5: '1.125rem',
		12.5: '3.125rem',
		25: '6.25rem',
	},
	styles: {
		global: {
			'*': {
				fontWeight: 'normal',
				fontSize: '1rem',
				fontFamily: 'Neue-Haas-Grotesk-Display, sans-serif',
			}
		},
		sizes: {
			container: {
				content: '1128px'
			}
		}
	},
	components: {
		Heading: {
			baseStyle: {
				fontFamily: 'Neue-Haas-Grotesk-Display, sans-serif',
			},
			variants: {
				content: {
					fontSize: '2rem',
					fontWeight: '500',
					lineHeight: '2.5rem',
				},
				small: {
					fontSize: '1.5rem',
					fontWeight: '700',
					lineHeight: '32px',
				}
			}
		},
		Button: {
			baseStyle: {
				fontWeight: '500',
			},
			variants: {
				primary: {
					bg: '#1F1F33',
					color: '#ffffff',
					lineHeighth: '1.25rem',
					'&:hover': {
						bg: '#3F3F53',
					},
					'&:active': {
						bg: '#5F5F72',
					},
					'&:disabled': {
						bg: '#E0E0EC',
						opacity: 1,
						color: '#AFAFCC',
						'&:hover': {
							bg: '#E0E0EC',
						}
					},

				},
				primaryLight: {
					bg: '#1F1F33',
					color: '#ffffff',
					lineHeighth: '1.25rem',
					'&:hover': {
						bg: '#3F3F53',
					},
					'&:active': {
						bg: '#5F5F72',
					},
					'&:disabled': {
						bg: '#E0E0EC',
						opacity: 1,
						color: 'white',
						'&:hover': {
							bg: '#E0E0EC',
						}
					},

				}
			}
		},
		Link: {
			baseStyle: {
				fontWeight: '500',
				'&:hover': {
					textDecoration: 'none',
				}
			},
		},
		Input: {
			variants: {
				brandFlushed: {
					field: {
						paddingLeft: 0,
						paddingRight: 0,
						borderRadius: '0px',
    				borderBottom: '1px solid #D2D2E3',
						height: '2rem',
						fontWeight: '500',
						'&:focus-visible': {
							borderBottom: '1px solid',
							borderColor: '#2B67F6',
							boxShadow: '0px 1px 0px 0px #2b67f6'
						},
						'&[aria-invalid=true]': {
							borderBottom: '1px solid #F25A5A',
							boxShadow: '0px 1px 0px 0px #F25A5A'
						}
					}
				}
			}
		}
	}
})

export default theme