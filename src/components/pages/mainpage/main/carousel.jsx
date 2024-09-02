import React from 'react'
import './carousel.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css/navigation";
import carousel1 from '../../../../images/carosel1.jpg'
import carousel2 from '../../../../images/carosel2.webp'
import carousel3 from '../../../../images/carosel3.jpg'
import carousel4 from '../../../../images/carosel4.webp'
import carousel5 from '../../../../images/carosel5.webp'

const Carousel = () => {
  return (
    <>
        {/* <div className='carousel-container'>
            <Swiper 
                loop={true}
                navigation={true}
                spaceBetween={0}
                modules={[Navigation, Autoplay]}
                autoplay={{
                delay: 4500 }}
                className="h-[150%]">
               <SwiperSlide>
                <img src={carousel1} alt="/"/>
               </SwiperSlide>
               <SwiperSlide>
                <img src={carousel2} alt="/"/>
               </SwiperSlide>
               <SwiperSlide>
               <img src={carousel3} alt="/"/>
               </SwiperSlide>
               <SwiperSlide>
                <img src={carousel4} alt="/"/>
               </SwiperSlide>
               <SwiperSlide>
                <img src={carousel5} alt="/"/>
               </SwiperSlide>
            </Swiper>
        </div> */}
    </>
  )
}

export default Carousel