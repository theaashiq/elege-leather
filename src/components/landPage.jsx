import React from 'react'
import Landheader from './landheader'
import Banner from './poster'
import './landPage.css'


const LandPage = () => {
  return (
    <>
      <div className='landPage-container'>        
        <Landheader/>
        <Banner/>
      </div>  
    </>
  )
}

export default LandPage