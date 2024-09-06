import React from 'react'
import Landheader from './landheader'
import Banner from './poster'
import './landPage.css'


const LandPage = () => {
  return (
    <>
      {/* <div className='landPage-container'>        
        <div className='container-landheader'>
          <Landheader/>
        </div>
        <div className='container-banner'>
          <Banner/>  
        </div>
      </div>   */}
      <div style={{width:'100%', height:'100vh'}}>
        <div className='landPage-header'>
          <Landheader/>
        </div>
        <div className='landPage-banner'>
          <Banner/>
        </div>
      </div>
    </>
  )
}

export default LandPage