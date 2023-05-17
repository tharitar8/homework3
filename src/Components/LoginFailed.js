import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

function LoginFailed() {
	const errorMessage = ' ‼️ Login Unsuccessful ‼️  Please try again 😥'

	return (
		<Container
			component='main'
			maxWidth='sm'
			className='signup-box'
			id='myInput'>
			<Box
				sx={{
					px: 4,
					py: 5,
					mt: 40,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Typography variant='h5' color='error' textAlign='center'>
					{errorMessage}
				</Typography>

				<Typography variant='h6' sx={{ mt: 4 }}>
					Did you Sign Up ?
				</Typography>
				<Button
					component={Link}
					to='/signup'
					variant='contained'
					sx={{ mt: 1 }}>
					Sign Up
				</Button>
				<Typography variant='h6' sx={{ mt: 4 }}>
					Back to Login
				</Typography>
				<Button component={Link} to='/' variant='contained' sx={{ mt: 1 }}>
					Log In
				</Button>
			</Box>
		</Container>
	)
}

export default LoginFailed
