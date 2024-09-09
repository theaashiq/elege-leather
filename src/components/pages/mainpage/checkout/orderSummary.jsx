import React, { useEffect } from 'react'
import './orderSummary.css'
import pic from '../../../../images/jacket2.jpg'
import { FormatPrice } from '../../../services/formatPrice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteBuyProduct } from '../../../services/reduxStore/slice/buyProductsSlice'

const OrderSummary = () => {

const buyProducts = useSelector((state) => state.buyProductsInfo.buyProducts)
const dispatch = useDispatch()

console.log(buyProducts, 'Products')
const today = new Date();
const futureDate = new Date(today);
futureDate.setDate(today.getDate() + 3);

// Format the future date to 'Wed Mar 20'
const options = { weekday: 'short', month: 'short', day: 'numeric' };
const formattedDate = futureDate.toLocaleDateString('en-US', options);

// useEffect(() => {
//     if(buyProducts.length === 0) {
//        navigate('/mainPage/products')
//     }
//    },[buyProducts])
   

// const data = [{
//         image: pic,
//         qty: 1,
//         name: "Biotique Bio neem Margosa Biotique Bio neem Margosa",
//         cat: "Shampoo",
//         seller: 'Elege Leather',
//         price: 1000,
//     },
//     {
//         image: pic,
//         qty: 2,
//         name: "Bio neem Margosa",
//         cat: "Shampoo",
//         seller: 'Elege Leather',
//         price: 2000
//     },
//     {
//         image: pic,
//         qty: 3,
//         name: "neem Margosa",
//         cat: "Shampoo",
//         seller: 'Elege Leather',
//         price: 3000,
//     },
//     { 
//         image: pic,
//         qty: 5,
//         name: "Margosa",
//         cat: "Shampoo",
//         seller: 'Elege Leather',
//         price: 5000
//     }]

  return (
    <React.Fragment>
        <div className='orderSummary-container'>
            <div className='orderSummary-heading'>Order summary</div>
            <div className='orderSummary-container-itemlist'>
            {buyProducts?.map((obj, index) => (
                <div key={index} className='orderSummary-container-item'>
                    <div className='orderSummary-container-item-blockA'>
                        <img src={obj.image} />
                        <p className='orderSummary-qty'>Qty : {obj.quantity ? obj.quantity : 1}</p>
                    </div> 
                    <div className='orderSummary-container-item-blockB'>
                        <div>
                            <p className='orderSummary-name'>{obj.product_name}</p>
                            <p className='orderSummary-cat'>{obj.category}</p>
                            <p className='orderSummary-seller'>Seller: Elega Leather</p>
                            <p className='orderSummary-price'><FormatPrice price={obj.disOffer_price}/></p>
                            {obj.savedUpTo && <p className='orderSummary-savedUpTo'>Saved up to <FormatPrice price={obj.savedUpTo}/></p>}
                        </div>
                        <div className='orderSummary-blockB-2'>
                            <p className='orderSummary-delivery'>Delivery by <span>{formattedDate}</span></p>
                            <button className='orderSummary-remove' onClick={() => dispatch(deleteBuyProduct(index))}>Remove</button>
                        </div>
                    </div>
                </div>                        
                ))}
            </div>
        </div>
    </React.Fragment>
  )
}

export default OrderSummary