import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo1 from '../../Images/logo1.jpeg'
import userIcon from '../../Images/user-icon.png'
import {Container, Row} from 'reactstrap'
import {motion} from 'framer-motion'
export default function AdminNav() {

    const menuRef= useRef(null);
    const profileActionRef = useRef(null);
  
    const menuToggle = () => menuRef.current.classList.toggle('active__menu')
    const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions')

  return (
    <header className="header" >
    <Container>
      <Row>
        <div className="nav__wrapper">
          <div className="logo">
          <Link to="/admin-dashboard" ><img src={logo1} alt="logo" /></Link>
          </div>


          <div className="navigation" ref={menuRef} onClick={menuToggle}>
            <ul className="menu">
              <li className="nav__item">
              <Link to="/admin-dashboard" >Dashboard</Link>
              </li>
              <li className="nav__item">
              <Link to="/admin-add-products" >Add-Products</Link>
              </li>
              {/* <li className="nav__item">
              <Link to="/admin-all-products" >All-Products</Link>
              </li> */}
              <li className="nav__item">
              <Link to="/admin-orders" >Orders</Link> 
              </li>
              <li className="nav__item">
              <Link to="/admin-users" >Users</Link> 
              </li>
              
            </ul>
          </div>

          <div className="nav__icons">
            <div className="profile">

              <motion.img whileTap={{scale: 1.2}} src={userIcon} alt="user-logo" onClick={toggleProfileActions} />
              
              <div className="profile__actions" ref={profileActionRef} onClick={toggleProfileActions} >
                <div className="d-flex align-items-center justify-content-center flex-column " >
                <Link to='/admin'>Logout</Link>
                  </div>
              </div>
            </div>
            <div className="mobile__menu">
            <span onClick={menuToggle} ><i class="ri-menu-line"></i></span>
          </div>
          </div>

          

        </div>
      </Row>
    </Container>
  </header>
  )
}
