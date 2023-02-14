import React from 'react'
import './Services.css'
import { Container, Row, Col } from 'reactstrap'
import { serviceData } from '../../Details/Details'
import { motion } from 'framer-motion'

 function Services() {
  return (
    <section className='services'>
      <Container>
        <Row>
            {
                serviceData.map((item,index)=>{
                    return(
                    <Col lg='3' md='4' key={index} >
                <motion.div whileHover={{scale:1.04}} className="service__item" style={{background:`${item.bg}`}} >
                    <span><i class={item.icon}/></span>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </div>
                </motion.div>
            </Col>
                    )
                })
            }
            
        </Row>
      </Container>
    </section>
  )
}

export default Services;