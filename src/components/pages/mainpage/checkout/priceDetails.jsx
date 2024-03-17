import React from 'react'
import "./css/priceDetails.css"
import { FormatPrice } from '../../../services/formatPrice'

const PriceDetails = () => {
  return (
    <React.Fragment>
        <div className="priceDetails-container">
            <p className='priceDetails-heading' >PRICE DETAILS</p>
            <div className='priceDetails-listBlock' style={{width:'100%'}}>
                <div className='priceDetails-list'>
                    <span>Price (4 items)</span>
                    <span><FormatPrice price={20000}/></span>
                </div>
                <div className='priceDetails-list'>
                    <span>Delivery Charges</span>
                    <span><FormatPrice price={200}/></span>
                </div>
                <div className='priceDetails-list'>
                    <span>Packing Charge</span>
                    <span><FormatPrice price={50}/></span>
                </div>
                <div className='priceDetails-list'>
                    <span>Total Payable</span>
                    <span><FormatPrice price={20250}/></span>
                </div>
            </div>
            <p className='priceDetails-totalSaving'>Your Total savings on this order <FormatPrice price={2850}/></p>
            <button className='priceDetails-confirmBtn'>
                CONFIRM ORDER
            </button>
        </div>
    </React.Fragment>
  )
}

export default PriceDetails