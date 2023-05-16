import React from 'react'
import { Link } from 'react-router-dom'

function LogInFailed() {
	return (
		<>
		<p className="blocktext">Login Unsuccessful.
		       Please try again. <br />
		OR <br />Click <Link to='/signup'>here</Link>
			to sign up or go back to the log in page.</p>
		</>
	)
}

export default LogInFailed
