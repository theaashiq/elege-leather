import React, { useContext, useEffect, useState } from 'react'
import { UserDetailsApi } from '../../../services/authentication'
import { getUserData } from '../../../services/localStorage'
import './customerDetails.css'
import { CheckoutContextData } from './CheckoutContext'

const CustomerDetails = () => {

const { customerDetails, setCustomerDetails, customerToggle, setCustomerToggle } = useContext(CheckoutContextData)

useEffect(() =>{
  if(getUserData()!== null){
  UserDetailsApi().then((response) => {
    console.log(response)
    setCustomerDetails({...customerDetails, 
      name:response.data.users[0].displayName,
      email:response.data.users[0].email,
      localId:response.data.users[0].localId })
    }) 
  }
}, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    setCustomerToggle(false)
  }
    
  const handleCustmerInput = (event) => {
    const { name, value } = event.target
    setCustomerDetails(currElement => (
      {...currElement, [name]: value}
    ))
  }

  console.log(customerDetails, "Details")

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
      <div className='customerDetails-container'>
          <p style={{
                transition: 'background-color 0.5s, color 0.5s',
                backgroundColor: customerToggle ? '#ff99a3' : '#c1fec1',
                color: customerToggle ? '#b20012' : '#017001'}} 
          className='customerDetails-heading'>Customer Details</p>
          {!customerToggle 
            ? ( <div className='customerDetails-details' style={{borderBottom:'1px solid #e6e6e6', padding:'5px 0px'}}>
                 <div>
                  {customerDetails.name 
                    ? <p>{customerDetails.name}</p> 
                    : <p style={{  color: '#b20012' }}>Please provide a name</p>}
                 </div>
                 <div>
                  {customerDetails.email 
                    ? <p>{customerDetails.email}</p> 
                    : <p style={{ color: '#b20012' }} >Please provide a email</p>}
                 </div>
                 <div>
                  {customerDetails.phoneNumber
                    ? <p>{customerDetails.phoneNumber}</p> 
                    : <p style={{ color: '#b20012'}}>Please provide a phone number</p>}
                 </div>
            </div> ) 
            : (<div className='customerDetails-detailsInput' style={{borderBottom:'1px solid #e6e6e6'}}>
                <div>
                  <p>Name</p>
                  <input 
                    value={customerDetails.name}
                    onChange={handleCustmerInput}
                    type='text'
                    name='name'
                    required/>
                </div>
                <div>
                  <p>Email</p>
                  <input
                    value={customerDetails.email}
                    onChange={handleCustmerInput} 
                    name='email'
                    type='text'
                    required/>
                </div>
                <div>
                  <p>Phone number</p>
                  <input
                    value={customerDetails.phoneNumber} 
                    onChange={handleCustmerInput} 
                    name='phoneNumber'
                    required
                    type='number'/>
                </div>
              </div> )}
        <div style={{display:'flex'}}> 
          {customerToggle 
            ? <input type='submit' value='Done' /> 
            : <button onClick={() => setCustomerToggle(true)}>Change</button> }
        </div>
      </div>
      </form>  
    </React.Fragment>
  )
}

export default CustomerDetails
