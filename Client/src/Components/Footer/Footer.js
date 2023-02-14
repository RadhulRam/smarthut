import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo1 from "../../Images/logo1.jpeg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md='6' >
            <div className="logo">
              <Link>
                <img src={logo1} alt="logo" />
              </Link>
            </div>
            <p className="footer__text mt-4">
              If you would like to experience the best of online shopping in
              India, you are at the right place. Smarthut is the ultimate
              destination for smart gadgets. You can shop online at Smarthut
              from the comfort of your home and get your favourites delivered
              right to your doorstep.
            </p>
          </Col>
          <Col lg="4" className="mb-4"  >
            <div className="footer__quicklinks">
              <h4 className="quicklinks__title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='/signup' >Signup</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="4" >
            <div className="footer__quicklinks">
              <h4 className="quicklinks__title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>123, Adress, City, District, State</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+1234567890</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>email123@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyrights">
              COPYRIGHT 2023 devoled by Radhul R. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
