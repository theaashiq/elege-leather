import React, { useEffect, useState} from 'react'
import './logIn.css'

//import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterApi, isAuthenticated } from '../../services/authentication'
import { BarLoader } from 'react-spinners'
import { storeUserData } from '../../services/localStorage'
import { useNotification } from '../../services/notification'
//import SignIn from './signIn'

const LogIn = () => {

const navigate = useNavigate()
const { notify } = useNotification()

const [logIn, setlogIn] = useState({
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  phoneNumber: '',
  password: '',
  cpassword : ''
})

const [loadingBar, setLoadingBar] = useState(false)
const [firstNameErrMsg, setFirstNameErrMsg] = useState('')
const [lastNameErrMsg, setLastNameErrMsg] = useState('')
const [emailErrMsg, setEmailErrMsg] = useState('')
const [phoneNumberErrMsg, setPhoneNumberErrMsg] = useState('')
const [genderErrMsg, setGenderErrMsg] = useState('')
const [passwordErrMsg, setPasswordErrMsg] = useState('')
const [cpasswordErrMsg, setCPasswordErrMsg] = useState('')
//const [commonErr, setCommonErr] = useState('')

const inputValue = (e) => {
const newObj = {...logIn, 
  [e.target.name]: e.target.value}
  setlogIn(newObj)
 console.log(logIn)
}

const handleForm = (e) => {
  e.preventDefault()
  if(validateForm()){
    setLoadingBar(true)
    console.log(logIn)
    RegisterApi(logIn).then((response) => {
      storeUserData(response.data.idToken)
      console.log(response)
    }).catch((err) => {
      alert(err)
      console.log(err)
      //alert(err)
    }).finally(() => {
      setLoadingBar(false)
    })
  }
}

const validateForm = () => {
  let success = true

  if(logIn.firstName === ''){
    setFirstNameErrMsg('*First Name is required') 
    success = false
   } else {
    setFirstNameErrMsg('')
   }

   if(logIn.lastName === ''){
    setLastNameErrMsg('*Last Name is required') 
    success = false
   } else {
    setLastNameErrMsg('')
   }

   if(logIn.email === ''){
    setEmailErrMsg('*Email is required') 
    success = false
   } else if(logIn.email === '' || !/\S+@\S+\.\S+/.test(logIn.email)) {
    setEmailErrMsg('Invalid Email')
    success = false
  } else {
    setEmailErrMsg('')
  }

  
  if(logIn.phoneNumber === ''){
    setPhoneNumberErrMsg('*Phone number is required') 
    success = false
   } else if(logIn.phoneNumber === '' || !/^\d{10}$/.test(logIn.phoneNumber)) {
    setPhoneNumberErrMsg('Invalid Phone number')
    success = false
  } else {
    setPhoneNumberErrMsg('')
  }

  if(logIn.gender === ''){
    setGenderErrMsg('*Select gender') 
    success = false
   } else {
    setGenderErrMsg('')
   }

   if(logIn.password === ''){
    setPasswordErrMsg('*Password is required') 
    success = false
   } else if (logIn.password.length<8){
    setPasswordErrMsg('*Password should have atleast 8 character')
   } else {
    setPasswordErrMsg('')
   }

   if(logIn.cpassword === ''){
    setCPasswordErrMsg('*Confirm password is required') 
    success = false
   } else if (logIn.password !== logIn.cpassword){
    setCPasswordErrMsg('*Confirm Password is not matching')
    success = false
  } else {
    setCPasswordErrMsg('')
   }
  return success
}

useEffect(() => {
  if (isAuthenticated()) {
    console.log('User is authenticated'); // Debugging
    notify('You have already logged in');
    navigate('/mainPage/products');
  }
}, []);

return (
  <>
    <div className='login-container'>
      <h1> Elega Leather </h1>
      <div className='login-block'>
        <h2>Log In</h2>
            <form className='login-form-block' onSubmit={handleForm}>
              <div className='grid-container'>
                <div className={firstNameErrMsg === '' ? 'input-block' : 'input-block error-block'}>
                  <h4>First Name</h4>
                  <input type='text' name='firstName' onChange={inputValue}/>
                  <p>{firstNameErrMsg}</p>
                </div>
                <div className={lastNameErrMsg === '' ? 'input-block' : 'input-block error-block'}>
                  <h4>Last Name</h4>
                  <input type='text' name='lastName' onChange={inputValue}/>
                  <p>{lastNameErrMsg}</p>
                </div>
                <div className={emailErrMsg === '' ? 'input-block' : 'input-block error-block'}>
                  <h4>Email</h4>
                  <input type='text' name='email' onChange={inputValue}/>
                  <p>{emailErrMsg}</p>
                </div>
                <div className={phoneNumberErrMsg === '' ? 'input-block' : 'input-block error-block'}>
                  <h4>Phone Number</h4>
                  <input type='text' name='phoneNumber' onChange={inputValue}/>
                  <p>{phoneNumberErrMsg}</p>
                </div>
                <div className={genderErrMsg === '' ? 'input-block' : 'input-block error-block'}>
                  <select id="gender" placeholder="Gender" name='gender' onChange={inputValue}>
                    <option disabled selected value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                  <p>{genderErrMsg}</p>
                </div>
              </div>
              <h3 className='create-pass-text'>Create Password</h3>
              <div className='password-block'>
                <div className={passwordErrMsg === '' ? 'input-block' : 'input-block error-block'}>
                  <h4>Password</h4>
                  <input type='password' name='password' onChange={inputValue}/>
                  <p>{passwordErrMsg}</p>
                </div>
                <div className={cpasswordErrMsg === '' ? 'input-block' : 'input-block error-block'}>
                  <h4>Confirm Password</h4>
                  <input type='password' name='cpassword' onChange={inputValue}/>
                  <p>{cpasswordErrMsg}</p>
                </div>
              </div>
              <center>
                {/* <p className='common-Err'>{commonErr}</p> */}
                <div className='logIn-btn'>
                  {loadingBar ? <BarLoader color='#36d7b7'/> : <input className='log-btn' type='submit' value='Create a account'/> }
                </div>
              </center>  
            </form>
            <center>
              <p className='signIn-link'>Already have a account ?<Link to='/signIn'><span>Sign In</span></Link></p>
            </center>
            
      </div>
    </div>
    
   </>
  )
}

export default LogIn