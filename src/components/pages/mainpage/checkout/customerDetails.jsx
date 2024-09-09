import React, { useEffect, useState } from 'react'
import { UserDetailsApi } from '../../../services/authentication'
import { getUserData } from '../../../services/localStorage'
import './customerDetails.css'

const CustomerDetails = () => {

  const [customerDetails, setCustomerDetails] = useState({
    name:'',
    email: '',
    localId: '',
    phoneNumber: '',
  })

  const [buttonToggle, setButtonToggle] = useState(false)

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
    
  return (
    <React.Fragment>
      <div className='customerDetails-container'>
          <p style={{
                backgroundColor:'#ff99a3',
                color: '#b20012',
                border: '1px solid #b20012'}} 
          className='customerDetails-heading'>Customer Details</p>
          {!buttonToggle 
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
                    type='text'/>
                </div>
                <div>
                  <p>Email</p>
                  <input
                    value={customerDetails.email} 
                    type='text'/>
                </div>
                <div>
                  <p>Phone number</p>
                  <input
                    value={customerDetails.phoneNumber} 
                    type='text'/>
                </div>
              </div> )}
        <div style={{display:'flex'}}> 
          {buttonToggle 
            ? <button onClick={() => setButtonToggle(false)}>Done</button> 
            : <button onClick={() => setButtonToggle(true)}>Change</button> }
        </div>
    </div>  
    </React.Fragment>
  )
}

export default CustomerDetails
