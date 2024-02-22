import React, { useState, useEffect } from 'react'
import data from '../../../services/data'
import './css/cartProductGridBlock.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const CartProductGridBlock = () => {

const [ products , setProducts ] = useState([])

useEffect(() => {
  fetchData()
},[])

const fetchData = () => {
  const idArray = []
  for(let i = 0; i < 10; i++ ){
      const randomId = Math.floor(Math.random()*29) + 1
      idArray.push(randomId)
      console.log(idArray, 'ARRay')
  }
  const productData = data.filter(obj => idArray?.includes(obj.id))
  setProducts(productData)
}

const handleAddToCart = ({details}) => {

}

console.log(products, 'Products')

  return (
    <>
      <p className='cartProductGrid-Paragraph'>
        You might also like this
      </p>
      <div className='cartProductGridBlock-container'>
        {products.slice(0, 4).map((obj, index) => (
          <div 
            key={index} 
            className='cartProductGrid'>
              <div className='cartProductGridBlock'>
                <img src={obj.image}/>
              </div>
              <div className='cartProductGridBlock-details'>
                <div>
                  <p style={{fontSize:'14px'}}>{obj.product_name}</p>
                  <p style={{fontSize:'14px'}}>{obj.rating}</p>
                  <p style={{fontSize:'14px'}}>M.R.P <span>{obj.offer_price}</span></p>
                </div>
                <div className="cartProductGridBlock-btn">
                  <p onClick={() => handleAddToCart(obj.image,
                                                    obj.product_name,
                                                    obj.offer_price,
                                                    obj.rating,
                                                    obj.price,
                                                    obj.id)}>Add to cart</p>
                </div>
              </div>
          </div>
        ))}
      </div>    
    </>

  )
}

export default CartProductGridBlock
