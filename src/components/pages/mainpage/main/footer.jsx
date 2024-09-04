import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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
          <div onClick={() => window.location.href = 'mailto:mdaashiqin2000@gmail.com'}>
            mdaashiqin2000@gmail.com
          </div>
        </div>
        <div className='footer-BlockC'>
          <div style={{marginBottom:'8px'}}>Follow us</div>
          <div>
            <GitHubIcon
              style={{cursor:'pointer'}}
              onClick={() => window.open('https://github.com/theaashiq', '_blank')}/>
            <LinkedInIcon
              style={{margin: '0px 14px', cursor:'pointer'}}
              onClick={() => window.open('https://www.linkedin.com/in/mohammed-aashiq-445569247/', '_blank')}/>
            <InstagramIcon
              style={{cursor:'pointer'}}
              onClick={() => window.open('https://www.instagram.com/_the_aashiq?igsh=MW5zejlpbXZxcDgxdg==', '_blank')}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer