import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/Offers/Offers'
import Bestseller from '../Components/BestSeller/Bestseller'
import NewCollection from '../Components/NewCollections/NewCollection'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      
      <Offers/>
      <NewCollection/>
      {/* <Bestseller/> */}
      
    
    

    </div>
  )
}

export default Shop
