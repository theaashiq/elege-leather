import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../../../services/data'
import { FormatPrice } from '../../../services/formatPrice'
import './suggestingProducts.css'

const SuggestingProducts = (props) => {

const { category, handleFocus, productName } = props 

const [sugPro, setSugPro ] = useState([])

const navigate = useNavigate()

useEffect(() => {
    if(category) {
        const filteredData = data.filter(obj => 
            obj.category.includes(category.toLowerCase())
        )
        setSugPro(filteredData)
    }
},[])

const handleProductView = (id) => {
    // setPosterToogle(false)
    navigate(`/mainPage/productView/${id}`)
    handleFocus()
  }

console.log(sugPro, 'PRo')
console.log(productName, "PROD")

  return (
    <>
    <div className='suggestingProduct-text'>
        Suggestion for You
    </div>
    <div style={{display:'flex', flexWrap:'wrap', marginLeft:'10px'}}>
        {sugPro?.map((pro) => (
          <div  
            style={{
                display: productName === pro.product_name && 'none',
                margin: '10px'}}
            className='products-block' 
            onClick={() => handleProductView(pro.id)}>
            <div className='products-blockA'>
              <img src={pro.image} alt={pro.product_name}/>
              <div className='products-name'>{pro.product_name}</div>
            </div>
            <div className='products-price'>
              <div className='products-actual-price'><span><FormatPrice price={pro.price}/></span></div>
              <div className='products-offer-price'><FormatPrice price={pro.offer_price}/></div>
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default SuggestingProducts