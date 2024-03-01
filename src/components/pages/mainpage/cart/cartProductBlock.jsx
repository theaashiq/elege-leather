import React, { useContext, useState } from 'react'
import { AddCartContext } from './addtocartContext'
import './css/cartProductBlock.css'

const CartProductBlock = () => {

const { cartItems } = useContext(AddCartContext)


const handleChecked = () => {

  }

  
  return (
    <>
      <div className='CartProductBlock'>
        {cartItems.map((obj, index) => {
          return (
            <>
              <div
                 style={{display: 'flex', alignItems:'center'}}
                className='CartProductBlock-container'
                key={index}>
                <div className='CartProductBlock-container-checkBox'>  
                  <input
                    type="checkbox" 
                    checked={() => handleChecked(obj.id, obj.name, obj.price)}/>
                </div>
                <div style={{display:'flex', height:'100%', alignItems:'center'}}>
                  <img src={obj.image} alt={obj.name}/>
                </div>
                <div className='CartProduct'>
                  <div className='CartProductBlock-blockDetails'>
                    <div>
                      <h3>{obj.name}</h3>
                      <p className='CartProductBlock-rating'><span>Rating: </span>{obj.rating}</p>
                      <p className='CartProductBlock-inStock'>In stock</p>
                      <p className='CartProductBlock-EligibleShipping'>Eligible for FREE shipping</p>
                    </div>
                    <div className='CartProductBlock-blockDetails-bottom'>
                      <div className='CartProductBlock-QtyBlock'>
                        <p className='CartProductBlock-Qty'>Qty</p>
                        <p className='CartProductBlock-QtyController'>
                          <span>+</span>
                          <div className='CartProductBlock-QtyData'>
                            {obj.quantity}
                          </div>
                          <span>-</span>
                        </p>
                      </div>
                      <div className='CartProductBlock-delete'>
                        Delete
                      </div>
                    </div>
                  </div>
                  <div className='CartProductBlock-container-priceBlock'>
                    <p className='CartProductBlock-container-discount'>
                      {obj.discount}% Off
                    </p>
                    <p className='CartProductBlock-container-Limitedtimedeal'>
                      Limited time deal
                    </p>
                    <div>
                      <p className='CartProductBlock-container-price'>
                        Price
                      </p>
                      <p className='CartProductBlock-container-OfferPriceData'>
                        {obj.offerPrice}
                      </p>
                      <p className='CartProductBlock-container-priceData'>
                        M.R.P: <span>{obj.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )})}
      </div>
    </>
  )
}

export default CartProductBlock