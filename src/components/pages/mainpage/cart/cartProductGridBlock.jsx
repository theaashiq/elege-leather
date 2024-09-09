import React, { useState, useEffect, useContext } from 'react'
import { AddCartContext } from './addtocartContext';
import data from '../../../services/data'
import './cartProductGridBlock.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { FormatPrice } from '../../../services/formatPrice';
import { useNavigate } from 'react-router-dom';

const CartProductGridBlock = () => {

const [ products , setProducts ] = useState([])

const navigate = useNavigate()
useEffect(() => {
  fetchData()
},[])

const fetchData = () => {
  const idArray = []
  for(let i = 0; i < 10; i++ ){
      const randomId = Math.floor(Math.random()*29) + 1
      idArray.push(randomId)
      //console.log(idArray, 'ARRay')
  }
  const productData = data.filter(obj => idArray?.includes(obj.id))
  setProducts(productData)
}

//const { cartItems, setCartItems } = useContext(AddCartContext)

const handleAddToCart = (id) => {
  navigate(`/mainPage/productView/${id}`)
  // const checkExist = cartItems.some(item => item.id === id)  
  // if(!checkExist){
  //   setCartItems([...cartItems, {prodId: id, prodQty: 1}]) 
  //   console.log(cartItems, 'ITEMS')
  // }
  
}

//console.log(products, 'Products')

  return (
    <>
      {/* <p className='cartProductGrid-Paragraph'>
        You might also like this
      </p>
      <div className='cartProductGridBlock-container'>
        {products.slice(0, 2).map((obj, index) => (
          <div 
            key={index} 
            className='cartProductGrid'>
              <div className='cartProductGridBlock'>
                <img src={obj.image}/>
              </div>
              <div className='cartProductGridBlock-details'>
                <div>
                  <p style={{fontSize:'14px'}}>{obj.product_name}</p>
                  <p style={{fontSize:'12px'}}>Rating: <span>{obj.rating}</span></p>
                  <p style={{fontSize:'14px'}}><span><FormatPrice price={obj.offer_price}/></span></p>
                </div>
                <div className="cartProductGridBlock-btn">
                  <button onClick={() => handleAddToCart(obj.id)}>View</button>
                </div>
              </div>
          </div>
        ))}
      </div>     */}
      <div>
        <div className='cartProductGridBlock-Youmightalsolikethis'>You might also like this</div>
        <div>
          {products.slice(0, 2).map((obj) => (
            <div className='cartProductGridBlock'>
              <div className='cartProductGridBlock-imgBlock'>
                <img src={obj.image}/>
              </div>
              <div className="cartProductGridBlock-detailsBlock">
                <div className='cartProductGridBlock-details'>{obj.product_name}</div>
                <div className='cartProductGridBlock-details'>Rating: <span>{obj.rating}</span></div>
                <div className='cartProductGridBlock-details'><span><FormatPrice price={obj.offer_price}/></span></div>
                <button className='cartProductGridBlock-ViewBtn' onClick={() => handleAddToCart(obj.id)}>View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </> 

  )
}

export default CartProductGridBlock
