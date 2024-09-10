import React, { useContext, useEffect } from 'react'
import './checkout.css'
import OrderSummary from './orderSummary'
import DeliveryDetails from './deliveryDetails'
import CustomerDetails from './customerDetails'
import Payment from './payment'
import PriceDetails from './priceDetails'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CheckoutContextData } from './CheckoutContext'
import Invoice from './invoice/Invoice'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Checkout = () => {

const buyProducts = useSelector((state) => state.buyProductsInfo.buyProducts)
const navigate = useNavigate()
const { InvoicePage } = useContext(CheckoutContextData)

useEffect(() => {
 if(buyProducts.length === 0) {
    navigate('/mainPage/products')
 }
},[buyProducts])

const handleMainPage = () => {
    navigate('/mainPage/products')
  }

  return (
    <div style={{minHeight:'100vh'}}>
        {InvoicePage 
            ? 
                <>
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
                </>
            :   <>
                    <div className='checkout-InvoiceContainer'>
                        <p>Your order has been successfully processed. <br/> Thank you for your purchase!</p>
                        <Invoice/>
                        <button onClick={() => handleMainPage()}>Continue Shopping <ArrowForwardIcon style={{marginLeft:'10px'}}/></button>
                    </div>
                </>}
    </div>
  )
}

export default Checkout