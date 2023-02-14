import React from 'react'
import CCards from '../C-Cards/CCards'
import CCorousal from '../C-Corousal/CCorousal'
import CNavbar from '../C-Navbar/CNavbar'
import Corousal2 from '../Corousal2/Corousal2'
import Services from '../Services/Services'

function CHome() {
  return (
    <>
      <CNavbar/>
      <div className='home' >
      <Corousal2/>
      <Services/>
      <CCards SmartPhone tittle="Smart Phones" />
      <CCards SmartWatch tittle="Smart Watches" />
      <CCards EarBuds tittle="Ear Buds" />
      <CCorousal />
      </div>
      
    </>
  )
}

export default CHome
