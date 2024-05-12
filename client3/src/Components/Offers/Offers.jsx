import React from 'react'
import './Offers.css'
import eleclusive_image from "../Assets/exclusive_image.png"
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Offers = () => {
  return (
        <div className='offers'>
          
      <h1>TRENDING</h1>
      <hr/>
      <div className="offers-item">
        {data_product.map((item,i)=>{
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Offers

//TRENSING