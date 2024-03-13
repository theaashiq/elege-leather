import React, { useContext, useState, useEffect } from 'react'
import './css/addToCart.css'
import CartProductBlock from './cartProductBlock'
import  { AddCartContext }  from './addtocartContext'
import CartProductGridBlock from './cartProductGridBlock'
import { FormatPrice } from '../../../services/formatPrice'

const AddToCart = () => {
  const { cartItems, buyItems, total, setTotal } = useContext(AddCartContext)
  
  const [ proceedToggle, setProceedToggle ] = useState(false)

  useEffect(() => {
    if(total.total_amount !== 0){
      setProceedToggle(true)  
    } else {
      setProceedToggle(false)
    }
    
  },[total])

  const number = 123456.789;

// console.log(
//   new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
//     number,
//   ),
// );

  console.log(total.total_amount !== 0, 'State')
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
              {buyItems.length} items has been selected
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
                 Total amount 
                 <div style={{display:'flex',width:'100%',justifyContent: 'center'}}><FormatPrice price={total.total_amount}/></div>
                </div>
                <button disabled={!proceedToggle} className='addToCart-proccedToBuy'>
                   Proceed to Buy
                </button>
              </div>
            <div className='addToCart-gridBox'>
              <hr 
                style={{
                  width: '350px', 
                  border: 'none',
                  height: '1px',
                  background: '#bfbfbf',
                  //color: 'red',
                  marginTop: '15px',}}/>
                <CartProductGridBlock/>
              </div>
          </div>
        </div> 
      )}
    </>
  )
}

export default AddToCart
