import React from 'react'
import { Navbar } from './StyledPatrol'
import {BsFilterLeft} from 'react-icons/bs'
const PatrolNavbar = () => {
  return (
    <>
			<Navbar>
				<div className='navContainer'>
					{/* slider icon */}
					<div className='navbarIcon'>
							<BsFilterLeft style={{fontSize: 28, color: "#dbdbdb"}}/>
					</div>   
					{/* title */}
					<p className='patrolName'>Patrol</p>
					{/* profile display */}
					<div className='profilePicture'>
						<img src='https://image.shutterstock.com/image-vector/man-silhouette-profile-picture-vector-600w-151265393.jpg' alt = "" />						
					</div>
				</div>
			</Navbar>
    </>
  )
}

export default PatrolNavbar