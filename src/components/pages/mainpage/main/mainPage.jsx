import React, {useState, useEffect} from 'react'
import Header from './header'
import { useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LoginIcon from '@mui/icons-material/Login';
import { Link, NavLink, Outlet } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Footer from './footer'
import './mainPage.css'
import { UserDetailsApi } from '../../../services/authentication';
//import { UserDetailsApi } from "../../services/authentication"
//import { UserDetailsApi } from './services/authentication'
import { getUserData } from '../../../services/localStorage'
import { logout } from '../../../services/authentication';

const MainPage = ({children}) => {

const [user, setUser] = useState({name:"", email:"", localId:""})
const [footerToogle, setFooterToogle] = useState(window.location.pathname.split('/')[3])

const location = useLocation();

useEffect(() =>{
  if(getUserData()!== null){
  UserDetailsApi().then((response) => {
    console.log(response)
    setUser({ name:response.data.users[0].displayName,
              email:response.data.users[0].email,
              localId:response.data.users[0].localId })
        }) 
  }
  }, [])
  
  console.log(user.name)

  useEffect(() => {
    const pathSegment = window.location.pathname.split('/')[3];
    // console.log(window.location.pathname.split('/')[3] , 'Location')
    setFooterToogle(pathSegment)
  },[location])

  // /elege-leather/mainPage/addToCart
 
return (
    <>
      <div className="mainPage-container">
        <div className='mainPage-header-container'>
            <Header name={user.name} email={user.email} localId={user.localId}/>
        </div>
        <div 
          className='outlet-container' 
          style={{
            width: footerToogle === 'addToCart' && '100%',
            height: footerToogle === 'addToCart' && '100vh'}}>
            <Outlet/>
        </div>
        {footerToogle !== 'addToCart'
          && 
        <div 
          className='mainPage-footer-container' 
          style={{marginTop:'auto'}}>
            <Footer/>
        </div> }
      </div> 
    </>
  )
}

export default MainPage
