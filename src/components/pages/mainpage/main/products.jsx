import React, { useContext, useEffect, useState, useRef } from 'react'
import './products.css'
// import { data }   from '../../../services/data'
import data from '../../../services/data';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Carousel from './carousel';
import { productView } from '../../../services/handlingProducts'
import { useNavigate } from 'react-router-dom';
import { FormatPrice } from '../../../services/formatPrice';
import scrollDown from '../../../../images/icons/scroll-down.png'
import { AddCartContext } from '../cart/addtocartContext';

const Products = () => {

const { posterToogle, selectedCat, products, setProducts }  = useContext(AddCartContext)

const navigate = useNavigate()

const targetRef = useRef(null);

const handleProductView = (id) => {
 navigate(`/mainPage/productView/${id}`)
}

// console.log(posterToogle, 'Toogle')



useEffect(() => {
  if(selectedCat.length !== 0) {
    const lowerCaseSelectedCat = selectedCat.map(cat => cat.toLowerCase());
    const filteredProducts = data.filter((product) => {
      return lowerCaseSelectedCat.includes(product.category.toLowerCase())
    })
    setProducts(filteredProducts)
    scrollToTarget()
  } else {
    setProducts(data)
    scrollToTarget()
  }

},[selectedCat])

const scrollToTarget = () => {
  if (targetRef.current) {
    const offsetTop = targetRef.current.offsetTop;
    const viewportHeight = window.innerHeight;
    const scrollToPosition = offsetTop - viewportHeight / 4;

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  }
};

  return (
    <>
      <section className='productSection'>

        {posterToogle && <div className='products-carousel'>
          <Carousel/>

          <button className='products-swipeBtn' onClick={scrollToTarget}>Swipe down to start shopping now </button>
          <img src={scrollDown} onClick={scrollToTarget} />
        
        </div>}
        {/* <main className='grid'>  
          {products.map((currElem) => {
            return(
              <div className='product' key={currElem.id} onClick={() => handleProductView(currElem.id)}>
                 <div >
                    <img src={currElem.image} alt=''/>
                    <p className='product-name'>
                      {currElem.product_name}
                    </p>
                 </div>
                 <div className='price-and-buy-button'>
                    {/* <div className='product-view-btn' onClick={() => handleProductView(currElem.id)}>
                      <p>
                        {/* <span className='product-view-btn-icon'><RemoveRedEyeOutlinedIcon fontSize='small'/></span> 
                        <span className='product-view-btn-name'>View</span>
                      </p>
                    </div> 
                    <div>
                      <p className='price'>
                        <span className='actual-price'>M.R.P {currElem.price}</span>
                        <span className='offer-price'><FormatPrice price={currElem.offer_price}/></span>
                      </p>
                    </div>    
                 </div>
              </div>
            )
          })}   
     </main>    */}
      <div ref={targetRef} className='products-container'>
        {products?.map((pro, index) => (
          <div className='products-block' onClick={() => handleProductView(pro.id)}>
            <div className='products-blockA'>
              <img src={pro.image} alt={pro.product_name}/>
              <div className='products-name'>{pro.product_name}</div>
            </div>
            <div className='products-price'>
              <div className='products-actual-price'><span><FormatPrice price={pro.price}/></span></div>
              <div className='products-offer-price'><FormatPrice price={pro.offer_price}/></div>
            </div>
          </div>
        ))}
      </div>
     </section>

     
    </>
  )
}

export default Products
