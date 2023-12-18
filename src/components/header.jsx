import React, {useState, useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './header.css'
import { logout } from './services/authentication';
import { Close } from '@mui/icons-material';


const Header = ({name, email, localId}) => {
const [listToggle, setListToggle] = useState(false)
const [category, setCategory] = useState(false)
const [searchBarToggle, setSearchBarToggle] = useState(false)
const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
const [screenSize, setScreenSize] = useState(window.innerWidth)

const handleResize = () => {
  const newScreenSize = window.innerWidth;
  setScreenSize(newScreenSize)
}



useEffect(() => {
  setScreenSize(window.innerWidth)
  window.addEventListener('resize', handleResize)
  
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [])

console.log(screenSize)

console.log(name, email, localId)
const handleDropdownClick = () => setListToggle(true)
const closeDropdown = () => setListToggle(false)

const handleCategory = () => setCategory(!category) 

const logOutUser = () => {
  //setListToggle(false)
  logout()
  window.location.reload();
}

const handleSearchBarFocus = () => {
    if(screenSize <= 450) {
      setIsSearchBarFocused(true);
    }
  };

const handleSearchBarBlur = () => {
    if(screenSize <= 450) {
    setIsSearchBarFocused(false);
    } 
  };

useEffect(() => {
  if(screenSize < 450){ 
    setIsSearchBarFocused(false)
  }
},[screenSize])

return (
    <>
      <nav>
          <div className='brand-name'>
              Elege Leather            
          </div>
          <div className={category ? 'sm-nav-items nav-items':'nav-items'}>
              <div className='items'>Wallet</div>
              <div className='items'>Belt</div>
              <div className='items'>Shoe</div>
              <div className='items'>Bag</div>
              <div className='items'>Jackets</div>
              <div className='items'>Accessories</div>
          </div>
          <div className='category-button' onClick={handleCategory}>
            <div>{category ? <ExpandLessIcon/> : <ExpandMoreIcon/> }Category</div>
          </div>
          <div className='search-bar'>
              <input 
                type="text" 
                placeholder="Search" 
                onFocus={handleSearchBarFocus}
                onBlur={handleSearchBarBlur}/>
              <SearchIcon fontSize='medium'/>
          </div>
          <div className='side-block'>
          {!isSearchBarFocused && (
          <div className='side-container'>
            <div className='side-items'>
            {name && email && localId ?  (
             <div className='logOut-btn'>
               <div className='b-a'>
                   <p>Hello</p>
                   <p>
                   {name[0]}{name[1]}{name[2]}{name[3]}{name[4]}... { listToggle ? ( 
                               <ArrowDropUpIcon onClick={closeDropdown}/> ) : (
                               <ArrowDropDownIcon onClick={handleDropdownClick}/>) }
                   </p> 
               </div>
               {listToggle &&  (          
               <div className='b-b'>
                   <div onClick={logOutUser}><span>Log Out</span><span><LogoutIcon fontSize='small'/></span></div>
                   <div><span>Account Setting</span><span><SettingsIcon fontSize='small'/></span></div>
               </div> )}
             </div> ) : (
               <Link to='/signIn'>
               <div className="login-btn">
                 < LoginIcon sx={{fontSize: 35, 
                                 '@media(max-width:768px)' :{fontSize: 25} }}/>
                 <p>Sign In</p>
               </div>
             </Link> 
             )} 
             <div className='shopping-bar'>
               <LocalMallIcon sx={{fontSize: 35, 
                                 '@media(max-width:768px)':{fontSize: 25} }}/>
               <p>Cart</p>
             </div>
          </div>

          </div> )}
          </div>
          
        </nav>
    </>
  )
}

export default Header