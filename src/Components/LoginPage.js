import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/LoginPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { setUsername } from './actions/username'

import {
	Button,
	TextField,
	Link,
	Grid,
	Box,
	Typography,
	Container,
} from '@mui/material'

function LoginPage() {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})

	// const username = useSelector((state) => {
	// console.log('username:', username)
	// return state.username })

	const usernameState = useSelector((state) => state.username)
	// console.log('username:', usernameState)
	const dispatch = useDispatch()

	const storedUsername = usernameState.username
	const storedPassword = usernameState.password
	console.log('storedUsername:', storedUsername)
	console.log('storedPassword:', storedPassword)

	const [errMsg, setErrMsg] = useState('')
	const [successMsg, setSuccessMsg] = useState('')

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleLogin = () => {
		// console.log('formData.username:', formData.username)
		// console.log('formData.password:', formData.password)
		// console.log('storedUsername:', storedUsername)
		// console.log('storedPassword:', storedPassword)

		if (
			//adding the optional chaining operator (?.), the comparison will only be performed if storedUsername and storedPassword are defined
			formData.username === storedUsername&&
			formData.password === storedPassword
		) {
			console.log('Login successful. Redirecting...')
			setSuccessMsg('Login successful. Redirecting...')
			setFormData({ username: '', password: '' })
			navigate('/login-successful')
		} else {
			console.log('Login failed. Redirecting...')
			navigate('/login-failed')
		}
		dispatch(setUsername(formData.username, formData.password))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (!formData.username.trim() || !formData.password.trim()) {
			setErrMsg('Please fill in all fields')
		} else {
			setErrMsg('')
			handleLogin()
		}
	}

	return (
		<Container component='main' maxWidth='sm' className='signin-box'>
			<Box
				sx={{
					px: 4,
					py: 5,
					marginTop: 1,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Typography component='h1' variant='h3' className='custom-heading'>
					Log In
				</Typography>

				<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					{errMsg && (
						<Typography variant='body2' color='error'>
							{errMsg}
						</Typography>
					)}

					<TextField
						margin='normal'
						required
						fullWidth
						id='username'
						label='Username'
						name='username'
						autoComplete='username'
						autoFocus
						value={formData.username}
						onChange={handleChange}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						value={formData.password}
						onChange={handleChange}
					/>
					<Button
						id='myButton'
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}>
						Sign In
					</Button>

					<Grid container justifyContent='center' alignItems='center'>
						<Grid item>
							<Link href='/signup' variant='body2' id='myLink'>
								Don't have an account? Sign Up
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	)
}

export default LoginPage

// homework
// install redux react-redux
// import necessary Redux function and hooks
// create store.js for holding state tree to access the state
// remove localStorage
// dispatch setUsername action in handleLogin
