import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUpPage.css'
import {
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    if (!formData.username?.trim() || !formData.password?.trim()) {
      setErrMsg('Please fill in all fields');
    } else {
      setErrMsg('');
      setSuccessMsg('Signup successful');
      localStorage.setItem('username', formData.username); // Store the username in local storage
      localStorage.setItem('password', formData.password); // Store the password in local storage
      setFormData({
        username: '',
        password: '',
      });
    }
  };

  const navigate = useNavigate()

  const handleBackClick = () => {
	setSuccessMsg('')
	navigate('/')
  }

  return (
		<Container component='main' maxWidth='sm' className='signup-box'>
			<Box
				sx={{
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

				{successMsg ? (
					<>
						<Typography variant='h2' color='success'>
							{successMsg}
						</Typography>
						<Button variant='contained' onClick={handleBackClick}>
							Back to Home
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
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}>
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
};

export default SignUpPage;
