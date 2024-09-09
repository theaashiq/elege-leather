import React, { useEffect } from 'react'
import './checkout.css'
import OrderSummary from './orderSummary'
import DeliveryDetails from './deliveryDetails'
import CustomerDetails from './customerDetails'
import Payment from './payment'
import PriceDetails from './priceDetails'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Checkout = () => {

const buyProducts = useSelector((state) => state.buyProductsInfo.buyProducts)
const navigate = useNavigate()

useEffect(() => {
 if(buyProducts.length === 0) {
    navigate('/mainPage/products')
 }
},[buyProducts])

  return (
    <div style={{minHeight:'100vh'}}>
        <div className='checkout-nav'>
            <p className='checkout-nav-brandName'>Elege Leather</p>
            <p className='checkout-nav-checkout'>Checkout</p>
        </div>
        <div className='checkout-container'>
            <div className='checkout-container-blockA'>
                <OrderSummary/>
                <CustomerDetails/>
                <DeliveryDetails/>
                <Payment/>
            </div>
            <div className='checkout-container-blockB'>
                <PriceDetails/>
            </div>
        </div>
    </div>
  )
}

export default Checkout