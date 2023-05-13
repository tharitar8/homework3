import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SignUpPage from './Components/SignUpPage'
import LoginPage from './Components/LoginPage'
import LoginSuccess from './Components/LoginSuccess'

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route path='/login-successful' element={<LoginSuccess />} />
					<Route path='/signup' element={<SignUpPage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
