import React, { useState } from 'react'
import axios from 'axios'
import {
	Button,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Grid,
	Box,
	Typography,
	Container,
} from '@mui/material'

const SignUpPage = () => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		axios
			.post('/api/signup', {
				username: formData.username,
				password: formData.password,
			})
			.then((res) => {
				console.log('Sign up successful')
			})
			.catch((error) => {
				console.error('Sign up unsuccessful', error)
			})
	}

	return (
		<Container component='main' maxWidth='sm'>
			<Box
				sx={{
					boxShadow: 3,
					borderRadius: 2,
					px: 4,
					py: 6,
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Typography component='h1' variant='h5'>
					Sign Up
				</Typography>
				<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
					<FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label='Remember me'
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}>
						Sign Up
					</Button>
					<Grid container>
						<Grid item>
							<Link href='/' variant='body2'>
								Already have an account? Sign In
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	)
}

export default SignUpPage
