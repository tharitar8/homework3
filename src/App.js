import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SignUpPage from './Components/SignUpPage'
import LoginPage from './Components/LoginPage'
import LoginSuccess from './Components/LoginSuccess'
import LoginFailed from './Components/LoginFailed'

function App() {
	return (
		<div className='app-container'>
			<div className='App'>
				<Router>
					<Routes>
						<Route path='/' element={<LoginPage />} />
						<Route path='/login-successful' element={<LoginSuccess />} />
						<Route path='/login-failed' element={<LoginFailed />} />
						<Route path='/signup' element={<SignUpPage />} />
					</Routes>
				</Router>
			</div>
		</div>
	)
}

export default App
