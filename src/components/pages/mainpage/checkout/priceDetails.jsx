import React, { useState, useContext, useEffect, useRef} from 'react'
import "./priceDetails.css"
import { FormatPrice } from '../../../services/formatPrice'
import { useSelector } from 'react-redux'
import { CheckoutContextData } from './CheckoutContext'
import { jsPDF } from 'jspdf';
// import Invoice from './invoice/Invoice'
// import html2canvas from 'html2canvas'

const PriceDetails = () => {

const buyProducts = useSelector((state) => state.buyProductsInfo.buyProducts)

const { 
    priceDetails, 
    setPriceDetails, 
    deliveryDetail, 
    setInvoicePage,
    InvoicePage,
    buttonToggle,
    customerToggle,
     } = useContext(CheckoutContextData)
const invoiceRef = useRef()

// const [ downloadToggle, setDownloadToogle] = useState(false)
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

const handleDownloadInvoice = () => {
    
};

console.log(InvoicePage, 'Page')

console.log(customerToggle && buttonToggle, 'Page4')
console.log(customerToggle, buttonToggle, 'Page5')
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
            <button 
                className='priceDetails-confirmBtn' 
                style={{
                    opacity: (!customerToggle && !buttonToggle) ? '1' : '0.5', 
                    transition: 'opacity 0.5s'
                }}
                onClick={() => {
                    if (!customerToggle && !buttonToggle) {
                        setInvoicePage(false)
                    }
                }}>
                CONFIRM ORDER
            </button>
        </div>
        
    </React.Fragment>
  )
}

export default PriceDetails