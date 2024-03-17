import React from 'react'
import './css/orderSummary.css'
import pic from '../../../../images/jacket2.jpg'
import { FormatPrice } from '../../../services/formatPrice'

const OrderSummary = () => {

const data = [{
        image: pic,
        qty: 1,
        name: "Biotique Bio neem Margosa Biotique Bio neem Margosa",
        cat: "Shampoo",
        seller: 'Elege Leather',
        price: 1000,
    },
    {
        image: pic,
        qty: 2,
        name: "Bio neem Margosa",
        cat: "Shampoo",
        seller: 'Elege Leather',
        price: 2000
    },
    {
        image: pic,
        qty: 3,
        name: "neem Margosa",
        cat: "Shampoo",
        seller: 'Elege Leather',
        price: 3000,
    },
    { 
        image: pic,
        qty: 5,
        name: "Margosa",
        cat: "Shampoo",
        seller: 'Elege Leather',
        price: 5000
    }]

  return (
    <React.Fragment>
        <div className='orderSummary-container'>
            <div className='orderSummary-heading'>Order summary</div>
            <div className='orderSummary-container-itemlist'>
            {data.map((obj, index) => (
                <div key={index} className='orderSummary-container-item'>
                    <div className='orderSummary-container-item-blockA'>
                        <img src={obj.image} />
                        <p className='orderSummary-qty'>Qty : {obj.qty}</p>
                    </div> 
                    <div className='orderSummary-container-item-blockB'>
                        <div>
                            <p className='orderSummary-name'>{obj.name}</p>
                            <p className='orderSummary-cat'>{obj.cat}</p>
                            <p className='orderSummary-seller'>Seller: {obj.seller}</p>
                            <p className='orderSummary-price'><FormatPrice price={1000}/></p>
                            <p className='orderSummary-savedUpTo'>Saved up to <FormatPrice price={100}/></p>
                        </div>
                        <div className='orderSummary-blockB-2'>
                            <p className='orderSummary-delivery'>Delivery by <span>Wed Mar 20</span></p>
                            <p className='orderSummary-remove'>Remove</p>
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