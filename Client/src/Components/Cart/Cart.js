import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { SmartPhoneDetails } from "../../Details/Details";
import { motion } from "framer-motion";
import "./Cart.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Cart() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    setDetails(SmartPhoneDetails);
  }, []);
  return (
    <>
    <Navbar/>
    <section className="home" >
      <Container>
        <Row>
          <Col lg='9'  >
          {details.map((details) => {
        return (
          <table className="table bordered">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src={details.Image} alt="" /></td>
                  <td>{details.productName}</td>
                  <td>{details.amount}</td>
                  <td> 1 </td>
                  <motion.td whileTap={{scale:1.05}} ><i  class='ri-delete-bin-line'></i></motion.td>
                </tr>
              </tbody>
            </table>


        );
      })}
          
          </Col>
          
          <Col lg='3' >
            <div>
              <h6 className="d-flex align-items-center justify-content-between" >
                Subtotal
                <span className="fs-4 fw-bold" >68778</span>

                </h6>
            </div>
            <p className="fs-6 mt-2" >taxes and shipping will calculate in checout</p>
            <div className="product__" >
            <button className="product__buy__button w-100 "><Link to='/login' >Checkout</Link></button>

              <button className="product__buy__button w-100 mt-3"><Link to='/shop' >Continue Shopping</Link></button>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
    
    
    
    
    {/* <div className="cart-app">
      {details.map((details) => {
        return (
          <div style={{ marginTop: "10px" }}>
            <div className="cart">
              <div className="cart-image">
                <img src={details.Image} alt="" />
              </div>
              <div className="cart-product-details">
                <div className="cart-product-name">
                  <p>{details.productName}</p>
                </div>
                <div className="cart-product-price">
                  <h5>{details.amount}</h5>
                  <p>
                    <s>{details.orginalAmount}</s>
                  </p>
                </div>
                <div className="cart-product-qty">
                        <input type='number' ></input>
                    </div>
                <button className="cart-product-pay">Place your order</button>
                <button className="cart-product-remove">Remove</button>
              </div>
            </div>
          </div>
          
        );
      })}
      <div className="cart-price-details">
        <div className="price-details-heading">
          <h3>PRICE DETAILS</h3>
        </div>
        <div className="price-details">
        <div >
          <h6>Price </h6>
        </div>
        <div >
          <p>dfvd</p>
        </div>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default Cart;
