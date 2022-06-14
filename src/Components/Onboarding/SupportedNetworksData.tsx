import { OptionBase } from 'chakra-react-select'
import { Optimism } from '../../Assets/custom chakra icons/SupportedNetworks/Optimism'
import { Polygon } from '../../Assets/custom chakra icons/SupportedNetworks/Polygon'

export interface NetworkSelectOption extends OptionBase {
  label: string;
  icon: JSX.Element;
}

export const supportedNetworks: {[networkName: string]: NetworkSelectOption} = {
	polygon: {
		label: 'Polygon',
		icon: <Polygon />,
	},
	optimism: {
		label: 'Optimism',
		icon: <Optimism />,
	}
}