import React, { useState, useContext } from 'react'
import './deliveryDetails.css'
import { CheckoutContextData } from './CheckoutContext'

const DeliveryDetails = () => {

  const { deliveryDetails, setDeliveryDetails, buttonToggle, setButtonToggle } = useContext(CheckoutContextData)

  const handledeliverySubmit = (event) => {
    event.preventDefault()
    setButtonToggle(false)
  }

  const handleDeliveryInput = (event) => {
    const {name, value} = event.target
    setDeliveryDetails(curElement => (
      {...curElement, [name]: value}
    ))
  }


  return (
  <React.Fragment> 
    <form onSubmit={handledeliverySubmit}>
      <div className='deliveryDetails-container'>
          <p style={{
                transition: 'background-color 0.5s, color 0.5s',
                backgroundColor: buttonToggle ? '#ff99a3' : '#c1fec1',
                color: buttonToggle ? '#b20012' : '#017001'}} 
          className='deliveryDetails-heading'>Delivery Details</p>
        <div>
        {buttonToggle 
        ? <React.Fragment>
            <div className='deliveryDetails-input'>
              <p>Type your full delivery address</p>
              <textarea 
                value={deliveryDetails.address}
                name='address'
                onChange={handleDeliveryInput}
                required
                style={{ resize: 'none' }}/>
            </div>
            <div className='deliveryDetails-addressForm' style={{borderBottom:'1px solid #e6e6e6'}}>
              <div className='deliveryDetails-inputBlock'>
                <p>Pincode</p>
                <input 
                  type='number'
                  value={deliveryDetails.pincode}
                  name='pincode'
                  onChange={handleDeliveryInput}
                  required/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>City/District/Town</p>
                <input 
                  type='text'
                  value={deliveryDetails.city}
                  name='city'
                  onChange={handleDeliveryInput}
                  required/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>State</p>
                <input 
                  type='text'
                  value={deliveryDetails.state}
                  name='state'
                  onChange={handleDeliveryInput}
                  required/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>LandMark</p>
                <input 
                  type='text'
                  value={deliveryDetails.landmark}
                  name='landmark'
                  onChange={handleDeliveryInput}
                  required/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>Locality</p>
                <input 
                  type='text'
                  value={deliveryDetails.locality}
                  name='locality'
                  onChange={handleDeliveryInput}
                  required/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>Receiver name</p>
                <input 
                  type='text'
                  value={deliveryDetails.rName}
                  name='rName'
                  onChange={handleDeliveryInput}
                  required/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>Phone number</p>
                <input 
                  type='text'
                  value={deliveryDetails.rPhoneNumber}
                  name='rPhoneNumber'
                  onChange={handleDeliveryInput}
                  required/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>Alternative Phone number</p>
                <input 
                  type='text'
                  value={deliveryDetails.altPhoneNumber}
                  name='altPhoneNumber'
                  onChange={handleDeliveryInput}
                  required/>
              </div>
            </div>
          </React.Fragment>
        :  deliveryDetails.address 
          ? <p className='deliveryDetails-Address' style={{borderBottom:'1px solid #e6e6e6'}}>{deliveryDetails.address}</p> 
          : <p style={{textAlign:'center', marginTop:'30px'}}>--empty--</p> }  
        </div>
        <div style={{display:'flex'}}> 
          {buttonToggle 
            ? <input type='submit' value='Done'/> 
            : <button onClick={() => setButtonToggle(true)}>Change</button> }
        </div>
      </div>
    </form>
  </React.Fragment>
    
  )
}

export default DeliveryDetails