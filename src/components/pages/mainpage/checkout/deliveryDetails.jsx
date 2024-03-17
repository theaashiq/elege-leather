import React, { useState } from 'react'
import './css/deliveryDetails.css'

const DeliveryDetails = () => {

  const [deliveryDetails, setDeliveryDetails] = useState({
    address:'Mohammed Aashiq, G14 Prabhavathi Lotus-1, 2nd Cross, Lake City Layout, Kodichikkanahalli, Bangalore South, Bengaluru karnataka-560076',
    rName: '',
    rPhoneNumber: '',
    pincode: '',
    locality: '',
    city: '',
    state: '',
    landmark: '',
    altPhoneNumber:'',
  })

  const [buttonToggle, setButtonToggle] = useState(false)

  return (
  <React.Fragment>
      <div className='deliveryDetails-container'>
          <p style={{
                backgroundColor:'#ff8995',
                color: '#b20012',
                border: '1px solid #b20012'}} 
          className='deliveryDetails-heading'>Delivery Details</p>
        <div>
        {buttonToggle 
        ? <React.Fragment>
            <div className='deliveryDetails-input'>
              <p>Address</p>
              <textarea value={deliveryDetails.address}/>
            </div>
            <div className='deliveryDetails-addressForm' style={{borderBottom:'1px solid #e6e6e6'}}>
              <div className='deliveryDetails-inputBlock'>
                <p>Pincode</p>
                <input type='text'/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>City/District/Town</p>
                <input type='text'/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>State</p>
                <input type='text'/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>LandMark</p>
                <input type='text'/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>Locality</p>
                <input type='text'/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>Receiver name</p>
                <input type='text'/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>Phone number</p>
                <input type='text'/>
              </div>
              <div className='deliveryDetails-inputBlock'>
                <p>Alternative Phone number</p>
                <input type='text'/>
              </div>
            </div>
          </React.Fragment>
        :  deliveryDetails.address 
          ? <p className='deliveryDetails-Address' style={{borderBottom:'1px solid #e6e6e6'}}>{deliveryDetails.address}</p> 
          : <p style={{textAlign:'center'}}>--empty--</p> }  
        </div>
        <div style={{display:'flex'}}> 
          {buttonToggle 
            ? <button onClick={() => setButtonToggle(false)}>Done</button> 
            : <button onClick={() => setButtonToggle(true)}>Change</button> }
        </div>
      </div>
    </React.Fragment>
    
  )
}

export default DeliveryDetails