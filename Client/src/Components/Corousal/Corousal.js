import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import banner from '../../Images/banner2.png'
import { motion } from 'framer-motion'
import './Corousal.css'


function Corousal() {
  return (
    <div>
      <section className="banner__section">
          <Container>
            <Row>
              <Col lg='6' md='6' >
                <div className="banner__content">
                  <p className="banner__subtitle">Trending products in 2023</p>
                  <h2>Please your eyes on the trending items at SMARTHUT</h2>
                    <motion.button whileTap={{scale:1.1}} className="buy__button"><Link to='/shop' >SHOP NOW</Link></motion.button>
                </div>
              </Col>

              <Col lg='6' md='6' >
                <div className="banner__img">
                  <img src={banner} alt="img" />
                </div>
              </Col>
            </Row>
          </Container>
      </section>
    </div>
  )
}

export default Corousal
