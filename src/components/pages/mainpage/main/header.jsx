import React, {useState, useEffect, useContext} from 'react'
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
import { isAuthenticated, logout } from '../../../services/authentication';
import { Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import wallet from '../../../../images/category/wallet.jpg'
import bag from '../../../../images/category/bag.jpg'
import belt from '../../../../images/category/belt.jpg'
import shoe from '../../../../images/category/shoe.jpg'
import jacket from '../../../../images/category/jacket.jpg'
import accessories from '../../../../images/category/accessories.jpg'
import allCat from '../../../../images/category/allCat.jpg'
import { AddCartContext } from '../cart/addtocartContext';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


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

const handleNavBar = () => {
  if(screenSize <= 450) {
    setIsSearchBarFocused(true);
  }
}  

useEffect(() => {
  if(screenSize < 450){ 
    setIsSearchBarFocused(false)
  }
},[screenSize])

const navigate = useNavigate()

const handleCartPage = () => {
  if(isAuthenticated()){
    navigate('/mainPage/addToCart')
  } else {
    navigate('/signIn')
  }
}

const handleHomePage = () => {
  navigate('/mainPage/products')
}


const [categoryToggle, setCategoryToogle] = useState(false)
const [showImages, setShowImages] = useState(false);
const [logOutBtnToggle, setLogOutBtnToggle] = useState(false)

const { selectedCat, setSelectedCat, setPosterToogle } = useContext(AddCartContext)

const categories = [
  {
    cat: "Wallet",
    pic: wallet
  },
  {
    cat: "Belt",
    pic: belt
  },
  {
    cat: "Shoe",
    pic: shoe
  },
  {
    cat: "Jacket",
    pic: jacket
  },
  {
    cat: "Bag",
    pic: bag
  },
  {
    cat: "Accessories",
    pic: accessories
  },
  {
    cat: "All Categories",
    pic: allCat
  },
]

useEffect(() => {
  let timer;
  if (categoryToggle) {
    // Delay rendering images by 2 seconds
    timer = setTimeout(() => {
      setShowImages(true);
    }, 500);
  } else {
    setShowImages(false); // Hide images if the category component is hidden
  }

  return () => clearTimeout(timer); // Cleanup the timer
}, [categoryToggle]);

const handleSelectCat = (cat) => {
  setPosterToogle(false)
  navigate('/mainPage/products')
  if(cat === 'All Categories') {
    setSelectedCat([])
    setCategoryToogle(false)
  } else {
    setSelectedCat(prevSelectedCat => {
      if (prevSelectedCat.includes(cat)) {
        return prevSelectedCat.filter(item => item !== cat);
      } else {
        return [...prevSelectedCat, cat];
      }
    });
  }
};

console.log(logOutBtnToggle, 'Test BTn')

return (
    
    <>
     {/* <nav className='navBar'>
          <div className='brand-name' onClick={handleHomePage}>
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
              <div className='shopping-bar' onClick={handleCartPage}>
                <LocalMallIcon sx={{fontSize: 35, 
                                 '@media(max-width:768px)':{fontSize: 25} }}/>
              </div>
            </div>
          </div> )}
        </div>
          
        </nav> */}
        <div style={{position:'fixed', width:'100%', zIndex:'25'}}>
          <div className='header-navBlock'>
            <div className='header-navMainSection'>
              <div className='header-heading'>
                Elega Leather
              </div>
              <div className='header-searchBlock'>
                <input type='text' style={{width:'90%'}} placeholder='Search'/>
                <SearchOutlinedIcon style={{marginRight:'14px'}}/>
              </div>
              <div className='header-mainBtns'>
                {name 
                  ? <>
                      <div className='headerUserName' onClick={() => setLogOutBtnToggle(!logOutBtnToggle)}>
                        <div>Welcome</div>
                        <div>{name.split(' ')[0]}</div>
                      </div> 
                      {logOutBtnToggle && <div className='header-logOutBtn' onClick={logOutUser}>
                        Log Out
                      </div> }
                    </>
                  : <Link to='/signIn'>
                      <div className='header-loginBtn'>
                        Login
                      </div>
                    </Link>}
                  <div onClick={handleCartPage} className='header-cartBtn'>
                    <ShoppingCartOutlinedIcon className='header-cartBtnIcon'/>
                    <div style={{marginTop:'8px'}}>Cart</div>
                  </div>
              </div>
            </div>
          </div>
          <div className='header-categories'>
            <div className='header-catSelectList' style={{height:'100%'}}>
              <div onClick={() => setCategoryToogle((prev) => !prev)} style={{cursor:'pointer'}}>
                <MenuOutlinedIcon/>
              </div>
              {selectedCat.length === 0 && <div style={{marginLeft:'10px', width:'100%'}}>All Categories</div> }
              <div className='header-selectedCat'>
                {selectedCat?.map((cat) => (
                  <div className='header-selectedCat-item'>
                    <div>{cat}</div>
                    <div style={{margin:'2px 0px 0px 5px'}}>
                      <HighlightOffIcon style={{fontSize: '12px'}} onClick={() => handleSelectCat(cat)}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`header-dropdown ${categoryToggle ? 'show' : '#eb93ac'}`}>
              {categories.map((obj) => (
                <div
                    style={{backgroundColor: selectedCat.includes(obj.cat) && '#eb93ac'}} 
                    className='header-catBlock' 
                    onClick={() => handleSelectCat(obj.cat)}>
                  <div className='header-catImgBlock'>
                    {showImages && <img src={obj.pic} alt={obj.cat} loading='lazy'/>}
                  </div>
                  <div className='header-catNameBlock'>
                    {obj.cat}
                  </div>  
                </div>
              ))}
            </div>
          </div>
        </div>

    </>
  )
}

export default Header