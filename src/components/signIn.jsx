import React, {useState} from 'react'
import './signIn.css'
import { Link } from 'react-router-dom'
import { LoginApi, isAuthenticated } from './services/authentication'
import { storeUserData } from './services/localStorage'
import { useNavigate } from 'react-router-dom'
import {BarLoader} from 'react-spinners'

const SignIn = () => {
const navigate = useNavigate()
const [emailErrorMessage, setEmailErrorMessage] = useState('')
const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
const [signIn, setSignIn] = useState({
  email:"",
  password: ''
})
const [loadingBar, setLoadingBar] = useState(false)
const [commonErr, setCommonErr] = useState('')

const inputValue = (e) => {
  setCommonErr('')
  const newObj = {...signIn,
    [e.target.name]: e.target.value
  }
  setSignIn(newObj)
  console.log(signIn)
}

const handleForm = (e) => {
  
  e.preventDefault()
  console.log("aashiq")
  if(validateForm()){
    setLoadingBar(true)
    LoginApi(signIn).then((response) => {
      storeUserData(response.data.idToken)
      redirectPage()
    }).catch((err) => {
      if(err.code="ERR_BAD_REQUEST"){
        setCommonErr('Invalid Credentials')
      }
    }).finally(() => {
      setLoadingBar(false)
    })
  }
}

const validateForm = () => {
  let success = true
  
  if(signIn.email === ''){
    setEmailErrorMessage('Email feild is empty')
    success = false
  } else if(signIn.email === '' || !/\S+@\S+\.\S+/.test(signIn.email)) {
    setEmailErrorMessage('Invalid Email')
    success = false
  } else {
    setEmailErrorMessage('')
  }

  if(signIn.password === ''){
    setPasswordErrorMessage('Password is empty')
    success = false;
  } else if(signIn.password.length< 8 ){
    setPasswordErrorMessage('Your password should had been atleast 8 character long')
    success = false
  } else {
    setPasswordErrorMessage('')
  }

  return success
}

const redirectPage = () => {
  if(isAuthenticated()) {
    navigate('/mainPage/products')
  }
}


return (
   <>
    <div className='sign-page'>
      <div className='sign-container'>
          <h1> Elega Leather </h1>
          <div className='sign-block'>
            <h2> Sign In</h2>
            <form className='form-block' onSubmit={handleForm}>
              <div className={emailErrorMessage === '' ? 'input-block' : 'input-block error-block'}>
                <h4>Email</h4>
                <input type='text' name='email' onChange={inputValue}/>
                <p>{emailErrorMessage}</p>
              </div>
              <div className={passwordErrorMessage === '' ? 'input-block' : 'input-block error-block'}>
                <h4>Password</h4>
                <input name='password' type='password' onChange={inputValue}/>
                <p>{passwordErrorMessage}</p>
              </div>
              <p className='common-Err'>{commonErr}</p>
              <div className='submit-btn'>
              {loadingBar ? <BarLoader color='#36d7b7'/> : <input type='submit' value='Sign In'/>}
              </div>  
            </form>
          </div>
          <div className="create-account">
            <h4>New Elega Leather</h4>
            <Link to='/logIn'>
              <p>Create your <span>Elega Leather account</span> </p>
            </Link>
          </div>
      </div>
    </div>
   </>
  )
}

export default SignIn
