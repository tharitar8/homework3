import React, { useState } from 'react'
import {
	Button,
	Dialog,
	Typography,
	Container,
	Box,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import '../styles/LoginSuccess.css'

import { useSelector } from 'react-redux'



function LoginSuccess() {
	// const [errMsg, setErrMsg] = useState('')
	const navigate = useNavigate()
	// Set showSignOutMsg state to false initially
	const [showSignOutMsg, setShowSignOutMsg] = useState(false)
	// hw4 access username from redux store
	const { username } = useSelector((state) => state.username)


	// function popup after user signing out
	const handleSignOut = () => {
		// when function called sets to true
		setShowSignOutMsg(true)
	}

	const handleCloseMsg = () => {
		setShowSignOutMsg(false)
		navigate('/')
	}

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
					marginTop: 40,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Typography variant='h4' color='green' sx={{ textAlign: 'center' }}>
					🎊 Congratulations! 🎊 <br /> You've successfully logged in{' '}
					<span style={{ color: 'red', fontSize: '2rem' }}>{username}</span>
				</Typography>

				<Button
					color='error'
					size='large'
					variant='outlined'
					sx={{ mt: 3, mb: 2, color: 'blue' }}
					onClick={handleSignOut}>
					Sign Out
				</Button>

				{/* pop up message after signout */}
				<Dialog open={showSignOutMsg} onClose={handleCloseMsg}>
					{/* <DialogTitle>Sign Out</DialogTitle> */}
					<div className='dialog-content'>
						<Typography variant='h6' color='green' sx={{ mt: 2, ml: 2, mr: 2 }}>
							You have successfully signed out.
						</Typography>
					</div>
					<div className='dialog-actions'>
						<Button
							sx={{
								px: 4,
								py: 1,
								mt: 2,
								ml: 15,
								mb: 2,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								color: '#FFFFFF',
								backgroundColor: '#855ee9',
								'&:hover': {
									transform: 'scale(1.1)',
									color: '#FFFFFF',
									backgroundColor: '#855ee9',
								},
							}}
							onClick={handleCloseMsg}>
							OK
						</Button>
					</div>
				</Dialog>
			</Box>
		</Container>
	)
}

export default LoginSuccess
