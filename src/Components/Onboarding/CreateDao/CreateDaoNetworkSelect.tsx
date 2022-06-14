import { useState } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { NetworkSelectOption } from '../SupportedNetworksData'
import AlertBanner from '../UI/Misc/AlertBanner'
import ContinueButton from '../UI/Misc/ContinueButton'
import NetworkSelect from '../UI/Misc/NetworkSelect'


const CreateDaoNetworkSelect = () => {
	const [newDaoSelectedNetwork, setNewDaoSelectedNetwork] = useState<NetworkSelectOption>()
	return (
		<>
			<Heading variant={'small'}>
      Which network should the DAO be on?
			</Heading>

			<AlertBanner />

			<Flex
				alignItems={'stretch'}
				mt={4}>
				<Flex
					flex={1}
					alignItems={'flex-start'}
				>
					<Text
						fontWeight={'500'}
						mt={2}>
					Network
					</Text>
					<Box mr={7} />
					<Flex
						w={'full'}
						direction={'column'}
						h={'full'}

					>
						<NetworkSelect
							value={newDaoSelectedNetwork}
							onChange={(newValue) => newValue && setNewDaoSelectedNetwork(newValue)}
							placeholder="Select a network"
						/>

						{
							newDaoSelectedNetwork && (
								<Text
									color={'brandSubtext'}
									fontSize={'sm'}
									mt={'auto'}
								>
							Before creating your DAO on-chain, you will be asked to switch the network in your wallet.
								</Text>
							)
						}

					</Flex>
				</Flex>
				<ContinueButton
					onClick={() => {}}
					disabled={!newDaoSelectedNetwork}
					props={
						{
							ml: 5,
							mt: 16,
							variant: 'primaryLight'
						}
					}
				/>
			</Flex>
		</>
	)
}

export default CreateDaoNetworkSelect