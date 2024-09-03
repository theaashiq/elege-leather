import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-BlockA'>
          Design and Developed By Mohammed Aashiq
        </div>
        <div className='footer-BlockB'>
          <div>&copy; 2023-2024</div>
          <div className='footer-ComName'>Elega Leather</div>
          <div>mdaashiqin2000@gmail.com</div>
        </div>
        <div className='footer-BlockC'>
          <div style={{marginBottom:'8px'}}>Follow us</div>
          <div>
            <InstagramIcon/>
            <LinkedInIcon style={{marginLeft:"5px"}}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer