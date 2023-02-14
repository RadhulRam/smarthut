import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import AdminNav from '../Admin-Nav/AdminNav'

function AdminOrders() {
  return (
    <>
      <AdminNav/>
    <section className='home' >
        <Container>
            <Row>
                <Col lg='12'><h4 className='fw-100' >Order Details</h4></Col>
                <Col lg='12'>
                    
                    <table className='table' >
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>radhul</td>
                                <td>kjhvjc2jhkjh</td>
                                <td>76546545</td>
                                <td>ayayyajhdcjdvbkdjfvbdsjkfvblksdfjvnlksfjnvlksdnbvlfknvlfksdnbvksfd,nv,fksn ,fn</td>
                                <td>
                                    <select className='form-control' >
                                        <option>pending</option>
                                        <option>ongoing</option>
                                        <option>delivered</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default AdminOrders
