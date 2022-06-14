import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Onboarding from './Pages/Onboarding'
import OnboardingCreateDao from './Pages/OnboardingCreateDao'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="onboarding/:id"
				>
					<Route
						index
						element={<Onboarding />}
					/>
					<Route
						path="create-dao"
						element={<OnboardingCreateDao />}
					/>
				</Route>
			</Routes>
		</div>
	)
}

export default App
