import React from 'react'
import "./css/payments.css"

const Payment = () => {
  return (
    <React.Fragment>
        <div className='payment-container'>
            <p style={{
                backgroundColor:'#ff99a3',
                color: '#b20012',
                border: '1px solid #b20012'}}
                className='payment-heading'>Payments</p>
            <div className='payment-options'>
                <div>
                    <input
                        type='radio'
                        name='COD' />
                    <label name='COD'>Cash on Delivery</label>
                </div>
                <div>
                    <input
                        type='radio'
                        name='net'
                        disabled />
                    <label 
                        name='net' disabled 
                        style={{color: ' #bfbfbf'}}> 
                            Credit / Debit / Net Banking / ATM
                    </label>
                </div>
                <p className='paymentOptions-information'>Cash on delivery is the only available payment option for now.</p>                
            </div>    
        </div>
    </React.Fragment>
  )
}

export default Payment