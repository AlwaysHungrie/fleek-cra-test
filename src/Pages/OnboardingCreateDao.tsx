import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateDaoNameInput from '../Components/Onboarding/CreateDao/CreateDaoNameInput'
import CreateDaoNetworkSelect from '../Components/Onboarding/CreateDao/CreateDaoNetworkSelect'
import BackgroundImageLayout from '../Components/Onboarding/UI/Layout/BackgroundImageLayout'
import OnboardingCard from '../Components/Onboarding/UI/Layout/OnboardingCard'

const OnboardingCreateDao = () => {
	const navigate = useNavigate()
	const [step, setStep] = useState(0)
	const [daoName, setDaoName] = useState<string>()

	const steps = [
		<CreateDaoNameInput
			key={'createdao-onboardingstep-0'}
			onSubmit={
				(name) => {
					setDaoName(name)
					nextClick()
				}
			} />,
		<CreateDaoNetworkSelect
			key={'createdao-onboardingstep-1'}
		/>
	]

	const nextClick = () => {
		if(step === 0) {
			setStep(1)
			return
		}

		navigate('/onboarding-create-dao')
	}

	const backClick = () => {
		if(step === 1) {
			setStep(0)
			return
		}

		navigate(-1)
	}

	return (
		<BackgroundImageLayout
			imageSrc={'/onboarding-create-dao.png'}
			imageBackgroundColor={'#C2E7DA'}
			imageProps={
				{
					mixBlendMode: 'hard-light'
				}
			}
		>
			<OnboardingCard onBackClick={backClick}>
				{steps[step]}
			</OnboardingCard>
		</BackgroundImageLayout>
	)
}

export default OnboardingCreateDao
