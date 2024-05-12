import React from 'react'
import './Bestseller.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Bestseller = () => {
  return (
    <div className='bestseller'>
          
    <h1>Best seller</h1>
    <hr/>
    <div className="bestseller-item">
      {data_product.map((item,i)=>{
          return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
    </div>
    
  </div>
)
}

export default Bestseller
