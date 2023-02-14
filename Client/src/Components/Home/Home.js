import React from "react";
import Navbar from "../Navbar/Navbar";
import Corousal from "../Corousal/Corousal";
import Services from "../Services/Services";
import Cards from "../Cards/Cards";
import Corousal2 from "../Corousal2/Corousal2";
import './Home.css'


function  Home() {
  return (
    <>
      <Navbar/>
      <div className="home">
        <Corousal2/>
        <Services/>
        <Cards SmartPhone tittle="Smart Phones" />
        <Cards SmartWatch tittle="Smart Watches" />
        <Cards EarBuds tittle="Ear Buds" />
        <Corousal />
      </div>
      
    </>
  );
}

export default Home;
