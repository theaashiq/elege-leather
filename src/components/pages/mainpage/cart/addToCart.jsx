import React, { useContext } from 'react'
import './css/addToCart.css'
import CartProductBlock from './cartProductBlock'
import { AddCartContext } from './addtocartContext'
import CartProductGridBlock from './cartProductGridBlock'

const AddToCart = () => {
  const { cartItems } = useContext(AddCartContext)
  

  return (
    <>
      {cartItems.length === 0 ? (
        <div className='no-items-in-cart'>
          <p>Your cart is currently empty</p>
        </div> ) : (
        <div className='cart-container'>
          <div className='addToCart-cart-block'>
           <CartProductBlock />
          </div>
          <div className='addToCart-yourOrder-container'>
            <div>
               6 items has been selected
            </div>
              {/* <div>
                <p>Your Orders</p>
              </div>
              <div className='addToCart-yourOrder-table'>
                <table className='addToCart-table'>
                  <tr className='addToCart-tableHeader'>
                    <th>Items</th>
                    <th>Amount</th>
                  </tr>
                  <tr>
                    <td>Fashionable High heel Boots <span> x 1</span></td>
                    <td>8500</td>
                  </tr>
                  <tr>
                    <td>Fashionable High heel Boots <span> x 1</span></td>
                    <td>8500</td>
                  </tr>
                  <tr>
                    <td>Fashionable High heel Boots  <span> x 1</span></td>
                    <td>8500</td>
                  </tr>
                  <tr>
                    <td>Fashionable High heel Boots <span> x 1</span></td>
                    <td>8500</td>
                  </tr>
                </table>
              </div> */}
              <div className='addToCart-totalAmount'>
                Total amount: 8550
              </div>
              <div className='addToCart-proccedToBuy'>
                 <p>Procced to Buy</p>
              </div>
              <hr 
                style={{
                  width: '350px', 
                  border: 'none',
                  height: '1px',
                  background: '#bfbfbf',
                  //color: 'red',
                  marginTop: '25px',}}/>
              <div className='addToCart-gridBox'>
                  <CartProductGridBlock/>
              </div>
          </div>
        </div> 
      )}
    </>
  )
}

export default AddToCart
