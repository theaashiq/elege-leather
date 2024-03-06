import React, { useContext } from 'react'
import './css/addToCart.css'
import CartProductBlock from './cartProductBlock'
import  { AddCartContext }  from './addtocartContext'
import CartProductGridBlock from './cartProductGridBlock'

const AddToCart = () => {
  const { cartItems, 
          proceedToBuyIds, } = useContext(AddCartContext)
  

  return (
    <>
      {cartItems.length <= 0 ? (
        <div className='no-items-in-cart'>
          <p>Your cart is currently empty</p>
        </div> ) : (
        <div className='cart-container'>
          <div className='addToCart-cart-block'>
           <CartProductBlock />
          </div>
          <div className='addToCart-yourOrder-container'>
            <div>
               {proceedToBuyIds.length} items has been selected
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
              <div className='addToCart-totalAmountBlock'>
                <div className='addToCart-totalAmount'>
                  Total amount: 8550
                </div>
                <div className='addToCart-proccedToBuy'>
                   <p>Proceed to Buy.</p>
                </div>
              </div>
            <div className='addToCart-gridBox'>
              <hr 
                style={{
                  width: '350px', 
                  border: 'none',
                  height: '1px',
                  background: '#bfbfbf',
                  //color: 'red',
                  marginTop: '25px',}}/>
                <CartProductGridBlock/>
              </div>
          </div>
        </div> 
      )}
    </>
  )
}

export default AddToCart
