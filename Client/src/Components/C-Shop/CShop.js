import React from 'react'
import CCards from '../C-Cards/CCards'
import CNavbar from '../C-Navbar/CNavbar'

export default function CShop() {
  return (
    <div>
      <CNavbar/>
      <div className='home' >
        <CCards SmartPhone tittle="Smart Phones" />
      <CCards SmartWatch tittle="Smart Watches" />
      <CCards EarBuds tittle="Ear Buds" />
      </div>
      
    </div>
  )
}
