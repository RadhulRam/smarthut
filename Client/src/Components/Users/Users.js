import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import AdminNav from '../Admin-Nav/AdminNav'

function Users() {
  return (
    <>
    <AdminNav/>
    <section className='home' >
        <Container>
            <Row>
                <Col lg='12'><h4 className='fw-100' >Users</h4></Col>
                <Col lg='12'>
                    
                    <table className='table' >
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>radhuljh</td>
                                <td>kjhvjc</td>
                                <td>76546545</td>
                                <td><button className="btn btn-danger">Delete</button></td>
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

export default Users
