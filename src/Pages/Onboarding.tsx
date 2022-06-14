import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { onboardingData } from '../Components/Onboarding/OnboardingData'
import OnboardingPathDataStep from '../Components/Onboarding/PathSelect/OnboardingPathDataStep'
import OnboardingPathSelectionStep from '../Components/Onboarding/PathSelect/OnboardingPathSelectionStep'
import BackgroundImageLayout from '../Components/Onboarding/UI/Layout/BackgroundImageLayout'
import OnboardingCard from '../Components/Onboarding/UI/Layout/OnboardingCard'
import { BottomRightCorner } from '../Components/Onboarding/UI/Misc/BottomRightCorner'
import ContinueButton from '../Components/Onboarding/UI/Misc/ContinueButton'
import { TopLeftCorner } from '../Components/Onboarding/UI/Misc/TopLeftCorner'

const Onboarding = () => {
	const [selectedPath, setSelectedPath] = useState<keyof typeof onboardingData>()
	const [step, setStep] = useState(0)
	const navigate = useNavigate()

	const steps = [
		<OnboardingPathSelectionStep
			key={'onboardingstep-0'}
			selectedPath={selectedPath}
			setSelectedPath={setSelectedPath} />,
		<OnboardingPathDataStep
			key={'onboardingstep-1'}
		 selectedPath={selectedPath!} />,
	]

	const nextClick = () => {
		if(step === 0) {
			setStep(1)
			return
		}

		navigate('/onboarding/create-dao')
	}

	const backClick = () => {
		if(step === 1) {
			setStep(0)
			return
		}

		setSelectedPath(undefined)
	}

	return (
		<BackgroundImageLayout
			imageSrc={'/onboarding.png'}
			imageBackgroundColor={'brand.500'}
			imageProps={
				{
					mixBlendMode: 'color-dodge'
				}
			}
			isDarkQuestbookLogo
		>
			<TopLeftCorner />
			<BottomRightCorner />

			<ContinueButton
				props={
					{
						pos: 'absolute',
						bottom: 5,
						right: 5,
					}
				}
				onClick={nextClick}
				disabled={!selectedPath}
			/>

			<OnboardingCard onBackClick={selectedPath ? backClick : undefined}>
				{steps[step]}
			</OnboardingCard>
		</BackgroundImageLayout>
	)
}

export default Onboarding
