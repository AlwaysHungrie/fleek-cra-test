import { useState } from 'react'
import { Box, Fade, Image } from '@chakra-ui/react'

const BackgroundImageLayout = ({
	imageSrc,
	imageBackgroundColor,
	imageProps,
	isDarkQuestbookLogo,
	children,
}: {
  imageSrc: string,
  imageBackgroundColor: string,
  imageProps?: any,
  isDarkQuestbookLogo?: boolean,
  children: React.ReactNode
}) => {
	const [imageLoaded, setImageLoaded] = useState(false)
	const [imageTransitioned, setImageTransitioned] = useState(false)
	return (
		<Box
			// bg={imageTransitioned ? imageBackgroundColor : 'transparent'}
			bg={imageBackgroundColor}
			h={'100vh'}
			w={'100%'}
			overflow={'hidden'}>
			<Image
				src={imageSrc}
				height={'100%'}
				// minHeight={'100vh'}
				width={'100%'}
				// minWidth={'100%'}
				objectFit={'cover'}
				onLoad={
					() => {
						// setTimeout(() => {

						// }, 0)
						setImageLoaded(true)
						setTimeout(() => setImageTransitioned(true), 500)
					}
				}
				// opacity={imageTransitioned ? 1 : 0}
				transition={'opacity 0.3s'}
				{...imageLoaded ? imageProps : null}
			/>

			<Fade in={imageTransitioned}>
				<Box
					pos={'absolute'}
					top={0}
					left={0}
					zIndex={1}
					p={5}>
					<Image
						src={isDarkQuestbookLogo ? '/questbooklogo-black.svg' : '/questbooklogo-white.svg'}
						alt="Questbook"
						zIndex={100} />
				</Box>

				{children}
			</Fade>
		</Box>
	)
}

export default BackgroundImageLayout