import { Flex, Text } from '@chakra-ui/react'
import { ErrorAlert } from '../../../../Assets/custom chakra icons/ErrorAlert'

const AlertBanner = () => (
	<Flex
		mt={4}
		px={3}
		py={2}
		bg={'bannerGrey'}
		borderRadius={'base'}
		w={'fit-content'}
	>
		<ErrorAlert
			color={'#89A6FB'}
			boxSize={5} />

		<Text
			ml={1}
			fontSize={'sm'}>
				Your wallet is connected to
			{' '}
			<span style={{ fontWeight: 500, fontSize: '14px' }}>
				Polygon mainnet
			</span>
				.
		</Text>
	</Flex>
)

export default AlertBanner