import React from "react";
import { Col, Container, Row } from "reactstrap";
import './Checkout.css'
import { useFormik } from "formik";
import { billingAddressSchema } from "../Schemas";
import CNavbar from "../C-Navbar/CNavbar";

export default function Checkout() {


  const { values, errors, touched, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phonenumber: "",
        streetAddress:"",
        city:"",
        pinCode:"",
        country:"",
      },
      validationSchema: billingAddressSchema,
      
    });

  return (
    <div>
      <CNavbar/>
      <section className="home" >
        <Container>
          <Row>
            <Col lg="8">
              <div className="wrapper">
                <div className="title">Billing Information</div>
                <form autoComplete="off">
                  <div className="form">
                    <div className="inputfield">
                      <label htmlFor="name">Name</label>
                      <input type="text" className={errors.name && touched.name ? "input-error" : "input"} value={values.name} onChange={handleChange} onBlur={handleBlur} id='name' />
                    </div>
                    {errors.name && touched.name && (<p className="error">{errors.name}</p>)}

                    <div className="inputfield">
                      <label>E-mail</label>
                      <input type="text" className={errors.email && touched.email ? "input-error" : "input"} value={values.email} onChange={handleChange} onBlur={handleBlur} id='email'  />
                    </div>
                    {errors.email && touched.email && (<p className="error">{errors.email}</p>)}

                    <div className="inputfield">
                      <label htmlFor="name">Mobile</label>
                      <input type="number" className={errors.phonenumber && touched.phonenumber ? "input-error" : "input"} value={values.phonenumber} onChange={handleChange} onBlur={handleBlur} id='phonenumber' />
                    </div>
                    {errors.phonenumber && touched.phonenumber && (<p className="error">{errors.phonenumber}</p>)}

                    <div className="inputfield">
                      <label htmlFor="name">Street Address</label>
                      <input type="text" className={errors.streetAddress && touched.streetAddress ? "input-error" : "input"} value={values.streetAddress} onChange={handleChange} onBlur={handleBlur} id='streetAddress' />
                    </div>
                    {errors.streetAddress && touched.streetAddress && (<p className="error">{errors.streetAddress}</p>)}

                    <div className="inputfield">
                      <label htmlFor="name">City</label>
                      <input type="text" className={errors.city && touched.city ? "input-error" : "input"} value={values.city} onChange={handleChange} onBlur={handleBlur} id='city' />
                    </div>
                    {errors.city && touched.city && (<p className="error">{errors.city}</p>)}

                    <div className="inputfield">
                      <label htmlFor="name">Post code</label>
                      <input type="text" className={errors.pinCode && touched.pinCode ? "input-error" : "input"} value={values.pinCode} onChange={handleChange} onBlur={handleBlur} id='pinCode' />
                    </div>
                    {errors.pinCode && touched.pinCode && (<p className="error">{errors.pinCode}</p>)}

                    <div className="inputfield">
                      <label htmlFor="name">Country</label>
                      <input type="text" className={errors.country && touched.country ? "input-error" : "input"} value={values.country} onChange={handleChange} onBlur={handleBlur} id='country' />
                    </div>
                    {errors.country && touched.country && (<p className="error">{errors.country}</p>)}

                  </div>
                </form>
              </div>
            </Col>

            <Col lg="4" >
                <div className="checkout__cart">
                    <h6>Total Qty : <span>0</span> </h6>
                    <h6>Subtotal : <span>567</span></h6>
                    <h6><span>Shipping : <br/> free shipping </span><span>0</span></h6>
                    <h4>Total Cost : <span>5465</span></h4>
                    <button className="checkout__buy__button">Place an order</button>
                </div>
                
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
