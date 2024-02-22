import React, { useState } from 'react'
import './products.css'
import data from '../../../services/data'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Carousel from './carousel';
import { productView } from '../../../services/handlingProducts'
import { useNavigate } from 'react-router-dom';

const Products = () => {
const [products, setProducts] = useState(data)
const navigate = useNavigate()

console.log(products)
const handleProductView = (id) => {
 navigate(`/mainPage/productView/${id}`)
}


  return (
    <>
      <section>
        <div>
          <Carousel/>
        </div>
        <main className='grid'>  
          {products.map((currElem) => {
            return(
              <div className='product' key={currElem.id}>
                 <div >
                    <img src={currElem.image} alt=''/>
                    <p className='product-name'>
                      {currElem.product_name}
                    </p>
                 </div>
                 <div className='price-and-buy-button'>
                    <div>
                      <p className='price'>MRP 
                        <span className='actual-price'> {currElem.price}</span>
                        <span className='offer-price'> {currElem.offer_price}</span>
                      </p>
                    </div>
                    <div className='product-view-btn' onClick={() => handleProductView(currElem.id)}>
                      <p>
                        <span className='product-view-btn-icon'><RemoveRedEyeOutlinedIcon fontSize='small'/></span>
                        <span className='product-view-btn-name'>Product View</span>
                      </p>
                    </div>   
                 </div>
              </div>
            )
          })}   
     </main>   
     </section>

     
    </>
  )
}

export default Products
