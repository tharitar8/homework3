import React, { useRef, useEffect, useState } from 'react'
import { Button, Dialog, DialogTitle } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import '../styles/LoginSuccess.css'

function LogInSuccess() {
	const navigate = useNavigate()
	
	const [showSignOutDialog, setShowSignOutDialog] = useState(false)



	const handleSignOut = () => {
		setShowSignOutDialog(true)
	}

	const handleCloseDialog = () => {
		setShowSignOutDialog(false)
		navigate('/')
	}

	return (
		<>
			<p className='blocktext'>Welcome! You have successfully logged in</p>


				<Button
					color='error'
					size='large'
					variant='outlined'
					sx={{ mt: 3, mb: 2 }}
					onClick={handleSignOut}>
					Sign Out
				</Button>
			

			<Dialog open={showSignOutDialog} onClose={handleCloseDialog}>
				<DialogTitle>Sign Out</DialogTitle>
				<div className='dialog-content'>
					<p>You have successfully signed out.</p>
				</div>
				<div className='dialog-actions'>
					<Button onClick={handleCloseDialog}>OK</Button>
				</div>
			</Dialog>
		</>
	)
}

export default LogInSuccess
