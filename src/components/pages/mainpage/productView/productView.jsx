import React, { useContext, useEffect, useState } from 'react'
import './productView.css'
import { useParams } from 'react-router-dom'
import data from '../../../services/data'
//import data from './data'
import './productView.css'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import { isAuthenticated } from '../../../services/authentication'
import { Modal } from '../../../services/notification'
import { useNotification } from '../../../services/notification'
import { AddCartContext } from '../cart/addtocartContext'

const ProductView = () => {

const [modalToggle, setModalToggle] = useState(false)  

const { productId } = useParams()
const foundProduct = data.find(currElem => currElem.id == productId) 

const discount = foundProduct.price - foundProduct.offer_price
const discountPercentage = (discount/foundProduct.price)*100
const roundDiscountPercentage = discountPercentage.toFixed(0)

const today = new Date()
const threeDaysLater = new Date(today)
threeDaysLater.setDate(today.getDate() + 3)


const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = daysOfWeek[threeDaysLater.getDay()]

const dayOfMonth = threeDaysLater.getDate()

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = months[threeDaysLater.getMonth()]

const year = threeDaysLater.getFullYear()

const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${monthName} ${year}`
console.log(formattedDate)

const items = [
  {
    icon: <LocalShippingOutlinedIcon sx={{fontSize: '35px'}}/>,
    label: 'Free Delivery'
  },
  {
    icon: <PaymentsOutlinedIcon sx={{fontSize: '35px'}}/>,
    label: 'Pay on Delivery'
  },
  {
    icon: <PublishedWithChangesOutlinedIcon sx={{fontSize: '35px'}}/>,
    label: '10 days Replacement'
  },
  {
    icon: <ShieldRoundedIcon sx={{fontSize: '35px'}}/>,
    label: '2 Year Warranty'
  },
  {
    icon: <WorkspacePremiumRoundedIcon sx={{fontSize: '35px'}}/>,
    label: 'Top Brand'
  },
  {
    icon: <PaidRoundedIcon sx={{fontSize: '35px'}}/>,
    label: 'Secure transaction'
  },
  {
    icon: <PetsRoundedIcon sx={{fontSize: '35px'}}/>,
    label: 'Cruelty-free certification '
  }
]

const { notify } = useNotification()

const { cartItems, setCartItems } = useContext(AddCartContext)

const handleAddToCart = () => {
const checkExist = cartItems.some((obj) => obj.id === foundProduct.id)

  if(isAuthenticated()){
    if(checkExist){
      notify('Already Added')
    } else {
    setCartItems([...cartItems, { 
      id:foundProduct.id, 
      name:foundProduct.product_name, 
      price:foundProduct.price,
      offerPrice:foundProduct.offer_price,
      image:foundProduct.image,
      rating:foundProduct.rating
    }])
    notify("Added to cart")
    }
    console.log(cartItems)
  } else {
    setModalToggle(true)
    console.log('Please logIn first')
  }
}



return (
  <>
    
      {modalToggle && <Modal close={setModalToggle}/>}
        <div className='productView-container'>
          <div className='productView-image-block'>
            <img 
              src={foundProduct.image} 
              alt={foundProduct.product_name} 
            />
            <div style={{display:'grid',
                         gridTemplateColumns: '50% 50%',}}>
              <div className='productView-addToCart-btn' onClick={handleAddToCart}>Add to cart</div>
              <div className='productView-buy-btn'>Buy Now</div>
          </div>
          </div>
          <div className='productView-details-block'>
              <h2>{foundProduct.product_name}</h2>
              <p className='productView-details'>{foundProduct.product_details}</p>
              <p className='productView-rating'>Rating :<span> {foundProduct.rating}</span></p>
              <hr/>
              <div className='producView-detailsGrids'>
                <div classname='productView-detailsGrid-1'>
                  <p className='productView-dealOfDay'>Deal of the day</p>
                  <p className='productView-discountPercentage'>-{roundDiscountPercentage}% offer</p>
                  <p className='productView-price'>
                    MRP 
                    <span className='productView-actualPrice'> {foundProduct.price}</span>
                    <span> {foundProduct.offer_price}</span>
                  </p>
                  <p style={{
                    marginBottom: '0px',
                    fontSize:'12px', 
                            }}>Inclusive of all taxes</p>
                  <p style={{
                    color:'#007185',
                    marginTop: '5px',
                    }}>
                  Save upto {discount}</p>
                  <p className='productView-inStock'>In stock</p>
                </div>
                <div className='productView-detailsGrid-2'>
                  <div>
                    <p >FREE delivery <span>{formattedDate}.</span> Or fastest delivery Today. Get within 5hr</p>
                 </div>
                </div>
              </div>
              <hr/>
              <div style={{ 
                      display:'flex',
                      flexWrap: 'wrap',
                      overflow: 'auto',
                            }}>
                {items.map((currElem, index) => {
                  return (
                    <div className='productsInfo' key={index}>
                      <div style={{
                        color: '#808080',
                        backgroundColor: '#f2f2f2',
                        padding: '5px',
                        borderRadius: '30px',
                      }}>
                        {currElem.icon}</div>
                      <div style={{color:'#007185'}}>{currElem.label}</div>
                    </div> 
                  )
                })}
              </div>
          </div>
        </div>
        
  </>
  
  )
}

export default ProductView