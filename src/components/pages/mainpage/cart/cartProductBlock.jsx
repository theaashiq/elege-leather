import React, { useContext, useState, useEffect, useRef } from 'react'
import { AddCartContext } from './addtocartContext'
import data from '../../../services/data'
import './css/cartProductBlock.css' 
import { useNotification } from '../../../services/notification'
import { FormatPrice } from '../../../services/formatPrice'


const CartProductBlock = () => {

const { 
  cartItems, 
  setCartItems, 
  buyItems, 
  setBuyItems,
  total, setTotal, } = useContext(AddCartContext) 
  
const { notify, notifyWarning } = useNotification()

const [selectedItems, setSelectedItems] = useState([])

const fetchData = () => {
  const cart = cartItems.map((obj) => {
    return data.filter((_obj) => parseFloat(obj) === parseFloat(_obj.id))
  }).flat()
  const cartItemsData = cart.map((obj) => {
    const discount = obj.price - obj.offer_price
    const discountPercentage = (discount/obj.price)*100
    const roundDiscountPercentage = discountPercentage.toFixed(0)
    return {...obj, 
        discount: roundDiscountPercentage,
        quantity: 1}
  })
  setSelectedItems(cartItemsData)
  console.log(selectedItems)
}

useEffect(() => { 
  fetchData()
},[cartItems])

const [deleteConformationModalToggle, setDeleteConformationModalToggle] = useState(false)
const [deleteProductDetails, setDeleteProductDetails] = useState('')

const initiateDelete = (_id, _name) => {
  setDeleteConformationModalToggle(true)
  setDeleteProductDetails({
    id: _id,
    name: _name,
  })  
}

const deleteConformationModalRef = useRef(null) 

useEffect(() => {
  let handler = (e) => {
    if(deleteConformationModalRef.current && !deleteConformationModalRef.current.contains(e.target)){
      setDeleteConformationModalToggle(false)
      console.log(deleteConformationModalRef.current)
    }
  }
  document.addEventListener('mousedown', handler)
  return() => {
    document.removeEventListener('mousedown', handler)
  }
})

const handledelete = (state, itemDetails) => {
  switch (state) {
    case 'cancel' :
      setDeleteProductDetails('')
      setDeleteConformationModalToggle(false)
      break ;
    case 'remove' :
      const updatedCartItems = cartItems.filter(obj => parseFloat(obj) !== parseFloat(itemDetails.id))
      setCartItems(updatedCartItems)
      setDeleteProductDetails('')
      setDeleteConformationModalToggle(false)
      //fetchData()
      notify('Removed successfully')
      break ;
  }
}

const handleProductQty = (state, _id) => {
  const updatedCartDetails = selectedItems.map((obj) => {
    if(parseFloat(obj.id) === parseFloat(_id)){
      switch (state) {
        case 'add' :
          if(parseFloat(obj.quantity) >= 10){
            notifyWarning(`Quantity limit exceeded. You can't add more than 10`)
            return obj
          } else {
            return {...obj, quantity: obj.quantity + 1}
          }
         case 'min':
          return parseFloat(obj.quantity) === 1 ? obj : {...obj, quantity: obj.quantity - 1}
        default :
         return obj  
      }
    } else {
      return obj
    }
  })
  //console.log(updatedCartDetails, 'AAs')
  setSelectedItems(updatedCartDetails)
}

const [proceedToBuyIds, setProceedToBuyIds] = useState([])

const handleChecked = (id) => {
  if(!proceedToBuyIds.includes(id)){
      const selectedItems = [...proceedToBuyIds, id]
      setProceedToBuyIds(selectedItems)
    }
  else{
    const updatedIds = proceedToBuyIds.filter(item => item !== id)
    setProceedToBuyIds(updatedIds)
  }  
}

useEffect(() => {
  fetchBuyingItemsData()
},[proceedToBuyIds, selectedItems])


const fetchBuyingItemsData = () => {
  const buyItemsDetails = proceedToBuyIds.map((_id) => {
    const items = selectedItems.filter((item) => item.id === _id)
    console.log(items, 'Items')
      return items.map((_item) => ({
        ..._item,
        total_amount:  _item.offer_price * _item.quantity,
        savedUpTo: _item.price * _item.quantity - _item.offer_price * _item.quantity 
      }))
    }).flat()
  setBuyItems(buyItemsDetails)
}

//console.log(selectedItems, 'Selected')
console.log(buyItems, "buy Items")
  
useEffect(() => {
  const overallTotalAmount = buyItems.reduce((total, item) => total + item.total_amount, 0)
  const overallSavedUpTo = buyItems.reduce((total, item) => total + item.savedUpTo, 0)
  setTotal({
      total_amount: overallTotalAmount,
      total_discount: overallSavedUpTo,
  })
},[buyItems])

console.log(total, 'Total Amount')
return (
    <>
      <div className='CartProductBlock'>
        {selectedItems.map((obj, index) => {
          return (
            <>
              <div
                style={{
                  display: 'flex', 
                  alignItems:'center',
                  border: proceedToBuyIds.includes(obj.id)  ? '2px solid green' : '2px solid #fff'}}
                className='CartProductBlock-container' 
                key={obj.id}>
                <div className='CartProductBlock-container-checkBox'>  
                  <input
                    type="checkbox" 
                    id='cartProductBlock-checkbox'
                    checked={proceedToBuyIds.includes(obj.id)}
                    onChange={() => handleChecked(obj.id)}/>
                </div>
                <div style={{display:'flex', height:'100%', alignItems:'center'}}>
                  <img src={obj.image} alt={obj.name}/>
                </div>
                <div className='CartProduct'>
                  <div className='CartProductBlock-blockDetails'>
                    <div>
                      <h3>{obj.product_name}</h3>
                      <p className='CartProductBlock-rating'><span>Rating: </span>{obj.rating}</p>
                      <p className='CartProductBlock-inStock'>In stock</p>
                      <p className='CartProductBlock-EligibleShipping'>Eligible for FREE shipping</p>
                    </div>
                    <div className='CartProductBlock-blockDetails-bottom'>
                      <div className='CartProductBlock-QtyBlock'>
                        <p className='CartProductBlock-Qty'>Qty</p>
                        <p className='CartProductBlock-QtyController'>
                          <span onClick={() => handleProductQty('min', obj.id)}>-</span>
                          <div className='CartProductBlock-QtyData'>
                            {obj.quantity}
                          </div>
                          <span onClick={() => handleProductQty('add', obj.id)}>+</span>
                        </p>
                      </div>
                      <div
                        onClick={() => initiateDelete(obj.id, obj.product_name)} 
                        className='CartProductBlock-delete'>
                        Delete
                      </div>
                    </div>
                  </div>
                  <div className='CartProductBlock-container-priceBlock'>
                    <p className='CartProductBlock-container-discount'>
                      {obj.discount}% Off
                    </p>
                    <p className='CartProductBlock-container-Limitedtimedeal'>
                      Limited time deal
                    </p>
                    <div>
                      <p className='CartProductBlock-container-price'>
                        Price
                      </p>
                      <p className='CartProductBlock-container-OfferPriceData'>
                        <FormatPrice price={obj.offer_price}/>
                      </p>
                      <p className='CartProductBlock-container-priceData'>
                        M.R.P: <span>{obj.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )})}
      </div>
      {deleteConformationModalToggle && 
        <div 
          ref={deleteConformationModalRef} 
          className='deleteConformationModal'>
            <p>Sure!! You want to remove the {deleteProductDetails.name} from your cart? </p>
            <div>
              <div className='deleteConformationModal-cancelBtn' onClick={() => handledelete("cancel",deleteProductDetails)}>Cancel</div>
              <div className='deleteConformationModal-removeBtn' onClick={() => handledelete("remove",deleteProductDetails)}>Remove</div>
            </div>
        </div> 
      }   
    </>
  )
}

export default CartProductBlock