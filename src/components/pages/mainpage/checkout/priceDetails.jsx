import React, { useState, useEffect} from 'react'
import "./priceDetails.css"
import { FormatPrice } from '../../../services/formatPrice'
import { useSelector } from 'react-redux'

const PriceDetails = () => {

const buyProducts = useSelector((state) => state.buyProductsInfo.buyProducts)

const [priceDetails, setPriceDetails] = useState({
    price: '',
    items: '',
    delivery: 200,
    packing: 50,
    totalPay: '',
    savedUpTo: ''
})

useEffect(() => {
    const totalPrice = buyProducts.reduce((total, product) => total + product.disOffer_price, 0);
    const saved = buyProducts.reduce((total, product) => total + product.savedUpTo, 0);
    const count = buyProducts.length
    const del = priceDetails.delivery
    const pack = priceDetails.packing
    const pay = totalPrice + del + pack
    setPriceDetails({
        ...priceDetails,
        price: totalPrice,
        items: count,
        totalPay: pay,
        savedUpTo: saved     
    })
},[buyProducts])


  return (
    <React.Fragment>
        <div className="priceDetails-container">
            <p className='priceDetails-heading' >PRICE DETAILS</p>
            <div className='priceDetails-listBlock' style={{width:'100%'}}>
                <div className='priceDetails-list'>
                    <span>Price ({priceDetails.items} items)</span>
                    <span><FormatPrice price={priceDetails.price}/></span>
                </div>
                <div className='priceDetails-list'>
                    <span>Delivery Charges</span>
                    <span><FormatPrice price={priceDetails.delivery}/></span>
                </div>
                <div className='priceDetails-list'>
                    <span>Packing Charge</span>
                    <span><FormatPrice price={priceDetails.packing}/></span>
                </div>
                <div className='priceDetails-list'>
                    <span>Total Payable</span>
                    <span><FormatPrice price={priceDetails.totalPay}/></span>
                </div>
            </div>
            <p className='priceDetails-totalSaving'>Your Total savings on this order <FormatPrice price={priceDetails.savedUpTo}/></p>
            <button className='priceDetails-confirmBtn'>
                CONFIRM ORDER
            </button>
        </div>
    </React.Fragment>
  )
}

export default PriceDetails