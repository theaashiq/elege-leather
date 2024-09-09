import React from 'react'
import './checkout.css'
import OrderSummary from './orderSummary'
import DeliveryDetails from './deliveryDetails'
import CustomerDetails from './customerDetails'
import Payment from './payment'
import PriceDetails from './priceDetails'

const Checkout = () => {
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