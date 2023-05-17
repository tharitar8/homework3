import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/SignUpPage.css'
import {
	Button,
	TextField,
	Link,
	Grid,
	Box,
	Typography,
	Container,
} from '@mui/material'

// setState user name and password
const SignUpPage = () => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})

	// set success and Err message on empty string
	const [errMsg, setErrMsg] = useState('')
	const [successMsg, setSuccessMsg] = useState('')
	// handleChange function use to update the formdata state response to changes in form input fields
	const handleChange = (event) => {
		const { name, value } = event.target
		// callBack function for updating the formData state
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(formData)
		// cannot be empty field
		if (!formData.username?.trim() || !formData.password?.trim()) {
			setErrMsg('Please fill in all fields')
		} else {
			setErrMsg('')
			setSuccessMsg('Signup successful')
			// Store the username&pwd in local storage
			localStorage.setItem('username', formData.username)
			localStorage.setItem('password', formData.password)
			setFormData({
				username: '',
				password: '',
			})
		}
	}

	const navigate = useNavigate()
	const handleBackClick = () => {
		setSuccessMsg('')
		navigate('/')
	}

	return (
		// mui template
		<Container
			component='main'
			maxWidth='sm'
			className='signup-box'
			id='myInput'>
			<Box
				sx={{
					px: 4,
					py: 5,
					marginTop: 40,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Typography component='h1' variant='h3'>
					Sign Up
				</Typography>

				{/* show successMsg */}
				{successMsg ? (
					<>
						<Typography variant='h2' color='success'>
							{successMsg}
						</Typography>

						<Button variant='contained' onClick={handleBackClick}>
							{' '}
							Back to login
						</Button>
					</>
				) : (
					<Box
						component='form'
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}>
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
							autoComplete='new-password'
							value={formData.password}
							onChange={handleChange}
						/>

						<Button
							className='signup-bttn'
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2, backgroundColor: 'pink', color: 'white' }}>
							Sign Up
						</Button>

						<Grid container justifyContent='center' alignItems='center'>
							<Grid item>
								<Link href='/' variant='body2'>
									Already have an account? Sign In
								</Link>
							</Grid>
						</Grid>
					</Box>
				)}
			</Box>
		</Container>
	)
}

export default SignUpPage
