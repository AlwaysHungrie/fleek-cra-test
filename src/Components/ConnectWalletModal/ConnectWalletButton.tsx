import { Box, Button, Spacer, Text } from '@chakra-ui/react'
import { ArrowRightFill } from '../../Assets/custom chakra icons/Arrows/ArrowRightFill'

const ConnectWalletButton = ({
	onClick,
	icon,
	name,
	isPopular,
}: {
  onClick: () => void,
  icon: React.ReactNode,
  name: string,
  isPopular?: boolean,
}) => {
	return (
		<Button
			w={'full'}
			px={6}
			py={4}
			h={'auto'}
			maxW={'27rem'}
			colorScheme={'brandGrey'}
			onClick={onClick}
		>

			{icon}
			<Text
				ml={'10px'}
				fontWeight={'500'}
				color={'black'}
			>
				{name}
			</Text>

			{
				isPopular && (
					<Box
						ml={3.5}
						bg={'greenTextBackground'}
						px={1}
						borderRadius={'sm'}
					>
						<Text
							fontWeight={'bold'}
							fontSize={'xs'}
							color={'greenTextDark'}
						>
							POPULAR
						</Text>
					</Box>
				)
			}

			<Spacer />
			<Text
				fontWeight={'500'}
				color={'blue.500'}>
				Connect
			</Text>
			<ArrowRightFill
				ml={2}
				boxSize={'13.33px'}
				color={'blue.500'} />
		</Button>
	)
}

export default ConnectWalletButton