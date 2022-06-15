import React, { useEffect } from 'react'
import { Box, Button, Container, Fade, Flex, Heading, Image as ChakraImage, Text } from '@chakra-ui/react'
import { ArrowRightFill } from '../Assets/custom chakra icons/Arrows/ArrowRightFill'
import ConnectWalletModal from '../Components/ConnectWalletModal'
var FontFaceObserver = require('fontfaceobserver')

const preloadImages = [{
	id: 0,
	url: '/onboarding.png'
}, {
	id: 1,
	url: '/stars.svg'
}, {
	id: 2,
	url: '/onboarding-create-dao.png'
}, {
	id: 3,
	url: '/questbooklogomini-black.svg'
}, {
	id: 4,
	url: '/questbooklogo-black.svg'
}]

const Home = () => {
	const [fontLoading, setFontLoading] = React.useState(true)
	const [imagesPreloading, setImagesPreloading] = React.useState(true)
	const font400 = new FontFaceObserver('Neue-Haas-Grotesk-Display', {
		weight: 400,
		style: 'normal'
	})

	const font500 = new FontFaceObserver('Neue-Haas-Grotesk-Display', {
		weight: 500,
		style: 'normal'
	})

	useEffect(() => {
		Promise.all([font400.load(), font500.load()])
			.then(
				() => setTimeout(() => setFontLoading(false), 300),
				() => setTimeout(() => setFontLoading(false), 300)
			)
	}, [])

	useEffect(() => {
		const loadImage = (image: {id: number, url: string}) => {
			return new Promise((resolve, reject) => {
				const loadImg = new Image()
				loadImg.src = image.url
				loadImg.onload = () => resolve(image.url)
				loadImg.onerror = err => reject(err);

				(window as any).image = loadImg
				// timeout override,
				// increase if too many users are facing broken images
				// decrease if users waiting too long
				setTimeout(() => reject(new Error('Timeout')), 7000)
			})
		}

		Promise.all(preloadImages.map(image => loadImage(image)))
			.then(() => {
				setImagesPreloading(false)
				console.log('images loaded')
			})
			.catch(err => {
				// not stopping the app if images not preloaded in time
				console.log(err)
				setImagesPreloading(false)
			})
	}, [])

	const [dialogOpen, setDialogOpen] = React.useState(false)
	return (
		<>
			<Box
				pos={'absolute'}
				top={0}
				left={0}
				zIndex={1}
				p={5}
			>
				<ChakraImage
					src='/questbooklogo-white.svg'
					alt='Questbook'
					zIndex={100}
				/>
			</Box>
			<Box
				pos={'absolute'}
				top={0}
				left={0}
				w={'full'}
				bgColor={'#1F1F33'}
				overflow={'hidden'}
			>
				<Fade in={!fontLoading && !imagesPreloading}>
					<Container
						maxW={['container.lg', 'container.content']}
					>
						<Flex
							direction={'column'}
							mt="112px"
							mb={5}
						>
							<Heading
								color={'white'}
								variant={'content'}>
								Your entire grant program on-chain
							</Heading>
							<Text
								color={'white.offWhite'}
								mt={3}>
							Grow your ecosystem by providing incentives to builders through grants.
							</Text>

							<Button
								onClick={() => setDialogOpen(true)}
								mt={5}
								bgColor={'white'}
								w={'fit-content'}>
							Get Started
								<ArrowRightFill
									ml={3}
									fill={'green'}
									boxSize={'13.33px'} />
							</Button>

							<ChakraImage
								pos={'absolute'}
								top={0}
								transform={'rotate(-24.82deg)'}
								src='/stars.svg'
								pointerEvents={'none'} />
						</Flex>
					</Container>
				</Fade>
			</Box>

			<ConnectWalletModal
				isOpen={dialogOpen}
				onClose={() => setDialogOpen(false)}
			/>
		</>
	)
}

export default Home