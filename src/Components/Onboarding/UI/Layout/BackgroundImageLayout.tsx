import { Box, Image } from '@chakra-ui/react'

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
}) => (
	<Box
		bg={imageBackgroundColor}
		h={'100vh'}
		w={'100%'}
		overflow={'hidden'}>
		<Image
			src={imageSrc}
			height={'100%'}
			width={'100%'}
			objectFit={'cover'}
			{...imageProps}
		/>

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
	</Box>
)

export default BackgroundImageLayout