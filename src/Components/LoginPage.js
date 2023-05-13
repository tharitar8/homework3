import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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


function LoginPage() {
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
    const navigate = useNavigate()

	const handleLogin = () => {
		console.log('username: ' + formData.username)
        navigate('/login-successful')
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(formData)
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
					Sign in
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
						autoComplete='current-password'
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
						sx={{ mt: 3, mb: 2 }}
						onClick={handleLogin}>
						Sign In
					</Button>
					<Grid container>
						<Grid item>
							<Link href='/signup' variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	)
}

export default LoginPage
