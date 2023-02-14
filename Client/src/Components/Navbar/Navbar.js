import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo1 from '../../Images/logo1.jpeg'
import userIcon from '../../Images/user-icon.png'
import {Container, Row} from 'reactstrap'
import {motion} from 'framer-motion'

function Navbar() {
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
                <Link to="/" ><img src={logo1} alt="logo" /></Link>
                </div>


                <div className="navigation" ref={menuRef} onClick={menuToggle}>
                  <ul className="menu">
                    <li className="nav__item">
                    <Link to="/" >Home</Link>
                    </li>
                    <li className="nav__item">
                    <Link to="/shop" >Shop</Link>
                    </li>
                    <li className="nav__item">
                    <Link to="/cart" >
                      <span className="cart__icon"><i class="ri-shopping-cart-2-line"></i></span>Cart</Link> 
                      {/* <span className="badge">0</span> */}
                    </li>
                    
                  </ul>
                </div>

                <div className="nav__icons">
                  <div className="profile">

                    <motion.img whileTap={{scale: 1.2}} src={userIcon} alt="user-logo" onClick={toggleProfileActions} />
                    
                    <div className="profile__actions" ref={profileActionRef} onClick={toggleProfileActions} >
                      <div className="d-flex align-items-center justify-content-center flex-column " >
                      <Link to='/login'>Login</Link>
                      <Link to='/signup'>Signup</Link>
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

















    // <div className="nav-main">
    //   <div className="navbar">
    //     <div className="logo">
    //      <Link to="/" className="home" > <img src={logo1} alt='' /> </Link>
    //     </div>
        

    //     <ul className="nav-links">
    //       <li>
    //         <div className="nav-input">
    //           <input type="text" />
    //           <button className="searchBtn">search</button>
    //         </div>
    //       </li>
    //       <Link to="/" className="home">
    //         <li>Home</li>
    //       </Link>
          
    //       <Link to="/login" className="signup">
    //         <li>Login</li>
    //       </Link>
    //       <Link to="/cart" className="about">
    //         <li><img src={cart} alt='' />Cart</li>
    //       </Link>
    //     </ul>
    //   </div>
    //  </div>
  );
}

export default Navbar;
