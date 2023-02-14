import React from 'react'
import Cards from '../Cards/Cards'
import Navbar from '../Navbar/Navbar'

function Shop() {
  return (
    <div>
      <Navbar/>
      <div className='home' >
        <Cards SmartPhone tittle="Smart Phones" />
        <Cards SmartWatch tittle="Smart Watches" />
        <Cards EarBuds tittle="Ear Buds" />
      </div>
      
    </div>
  )
}

export default Shop
