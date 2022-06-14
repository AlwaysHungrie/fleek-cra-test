import { Button } from '@chakra-ui/react'
import { ArrowRightFill } from '../../../../Assets/custom chakra icons/Arrows/ArrowRightFill'

const ContinueButton = ({
	onClick,
	disabled,
	props
}: {
  onClick: () => void,
  disabled: boolean,
  props?: any
}) => (
	<Button
		colorScheme={'brand'}
		borderRadius={'base'}
		py={3.5}
		px={7}
		zIndex={100}
		variant={'primary'}
		_disabled={
			{
				color: 'white',
			}
		}
		{...props}
		disabled={disabled}
		onClick={onClick}
	>
    Continue
		<ArrowRightFill
			ml={3}
			boxSize={'13.33px'} />
	</Button>
)

export default ContinueButton