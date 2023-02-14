import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import AdminAllProducts from '../Admin-AllProducts/AdminAllProducts'
import AdminNav from '../Admin-Nav/AdminNav'
import './AdminDashboard.css'

export default function AdminDashboard() {
  return (
    <>
      <AdminNav/>
      <section className='home' >
        <Container>
          <Row>
            <Col className='lg-3'>
              <div className='revenue__box'>
                <h5>Total Sales</h5>
                <span>3453</span>
              </div>
            </Col>
            <Col className='lg-3'>
            <div className='order__box'>
                <h5>Total Orders</h5>
                <span>53</span>
              </div>
            </Col>
            <Col className='lg-3'>
            <div className='products__box'>
                <h5>Total Products</h5>
                <span>34</span>
              </div>
            </Col>
            <Col className='lg-3'>
            <div className='user__box'>
                <h5>Total Users</h5>
                <span>21</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <AdminAllProducts/>
    </>
  )
}
