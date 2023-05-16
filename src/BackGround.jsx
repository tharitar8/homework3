import React from 'react'
import BG from '../src/assets/cafe.mp4'
import './BackGround.css'

const BackGround = () => {
	return (
		<div className='main'>
			<div className='overlay'></div>
			<video
				className='video'
				src={BG}
				autoPlay
				loop
				muted
				style={{ objectFit: 'cover' }}
			/>
		</div>
	)
}

export default BackGround
