import React from 'react'
import './products.css'
import data from './data'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Carousel from './carousel';

const Products = () => {
  return (
    <>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Carousel/>
        <div className='container-product'>
          {data.map((datas) => (
            <div className='product' key={datas.id}>
            <div className='section-a'>
              <img src={datas.image}/>
              <h3>{datas.product_name}</h3>
              {/* <p>{datas.product_details}</p>
              <p>Rating {datas.rating}</p> */}
            </div>
            <div className='section-b'>
              <h3>MRP: <span>{datas.price}</span> {datas.offer_price}</h3>
              <div className='buy-btn'><RemoveRedEyeOutlinedIcon fontSize='small'/><span>View Product</span></div>
            </div>
          </div>
          ))}
        </div>
     </section>
    </>
  )
}

export default Products
