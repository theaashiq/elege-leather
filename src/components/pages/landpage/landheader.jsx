import React from 'react'
import './landheader.css'
import { Link } from 'react-router-dom'

const Landheader = () => {
  return (
    <>
      <header>
        <Link to='/signIn'>
          Already have an account? Log in
        </Link>
        <Link to='/logIn'>
          Create New Account
        </Link>
      </header>
        {/* <header>
          <Link to='/signIn'>
            <div className='item'>Sign In</div>
          </Link>
          <Link to='/logIn'>  
            <div className='item'>Log In</div>
          </Link>  
        </header> */}
    </>
  )
}

export default Landheader
