import React from 'react'
import './poster.css'
import { NavLink } from 'react-router-dom'
// import banner from '../images/banner2.jpg'
import banner from '../../../images/banner2.jpg'

const Banner = () => {
  return (
    <>
    {/* <main>
       <div className='poster'>
        <img className='banner' src={banner} alt='banner'/>
          <div className='info-container'>
            <h1 className='poster-brand'>Elege Leather</h1>
            <p className='poster-motive'>Where Craftsmanship Meets Luxury, and Style Speaks Elegance.</p>
            <p className='poster-disclaimer'>Elega Leather is a distinguished brand renowned for its commitment 
               to crafting high-quality leather goods. With a passion for excellence 
               and a dedication to precision, Elega Leather creates products that 
               blend timeless elegance with modern sophistication. Elevate your style 
               with their exquisite range of leather accessories, where every piece 
               embodies the essence of luxury and craftsmanship</p>
            <NavLink to='mainPage/products'>
              <div className='btn-shop'>Shop Now</div>
            </NavLink>
          </div>
        </div>
    </main>     */}
      <div className='poster-container'>
          <img src={banner} />
          <div style={{display:'flex', flexDirection:'column', alignItems:'center',height:'fit-content'}}>
            <div className='poster-brand'>Elega Leather</div>
            <div className='poster-motive'>Where Craftsmanship Meets Luxury, and Style Speaks Elegance.</div>
          </div>
          <div className='poster-disclaimer'>
            Elega Leather is a distinguished brand renowned for its commitment 
            to crafting high-quality leather goods. With a passion for excellence 
            and a dedication to precision, Elega Leather creates products that 
            blend timeless elegance with modern sophistication. Elevate your style 
            with their exquisite range of leather accessories, where every piece 
            embodies the essence of luxury and craftsmanship
          </div>

          <NavLink to='mainPage/products'>
            Shop now
          </NavLink>
      </div>
    </>
  )
}

export default Banner