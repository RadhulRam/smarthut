import { useFormik } from "formik";
// import { useState } from "react";
import { Col, Container, Row } from 'reactstrap'
import AdminNav from "../Admin-Nav/AdminNav";
import { AddProductSchema } from '../Schemas';

export default function AdminAddProducts() {



    const { values, errors, touched, handleBlur, handleChange} =
    useFormik({
      initialValues: {
        Image: "",
        brand: "",
        type: "",
        productName: "",
        rating: "",
        amount: "",
        orginalAmount: "",
        discount:'',
        modelNumber:'',
        inBox:'',
        features:'',
        warrenty:'',
        color:'',
        audioJack:''

      },
      validationSchema: AddProductSchema,
      
    });

  return (
    <>
    <AdminNav/>
    <section className="" >
      <Container>
        <Row>
            <Col lg='12' >
            <div className="wrapper">
        <div className="title">Add Product</div>
        {/* {error ? <p className="signup-error">{error}</p> : ""} */}
        <form  autoComplete="off">
          <div className="form">
            <div className="inputfield">
              <label htmlFor="name">Image</label>
              <input
                type="text"
                className={
                  errors.Image && touched.Image ? "input-error" : "input"
                }
                value={values.Image}
                onChange={handleChange}
                onBlur={handleBlur}
                id="Image"
              />
            </div>
            {errors.Image && touched.Image && (
              <p className="error">{errors.Image}</p>
            )}
            <div className="inputfield">
              <label>Brand</label>
              <input
                type="text"
                className={
                  errors.brand && touched.brand ? "input-error" : "input"
                }
                value={values.brand}
                onChange={handleChange}
                onBlur={handleBlur}
                id="brand"
              />
            </div>
            {errors.brand && touched.brand && (
              <p className="error">{errors.brand}</p>
            )}
            
            <div className="inputfield">
              <label>Category</label>
              <div className="custom_select">
                <select
                  className={
                    errors.type && touched.type
                      ? "custom_select"
                      : "custom_select-error"
                  }
                  name="type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option >Select Category</option>
                  <option value="Smart Phone">Smart Phone</option>
                  <option value="Smart Watch">Smart Watch</option>
                  <option value="Ear Buds">Ear Buds</option>
                </select>
              </div>
            </div>
            <div className="inputfield">
              <label>Product Name</label>
              <input
                type="text"
                className={errors.productName && touched.productName ? "input-error" : "input"}
                value={values.productName}
                onChange={handleChange}
                onBlur={handleBlur}
                id="productName"
              />
            </div>
            {errors.productName && touched.productName && <p className="error">{errors.productName}</p>}
            <div className="inputfield">
              <label>Rating</label>
              <input
                type="text"
                className={
                  errors.rating && touched.rating ? "input-error" : "input"
                }
                value={values.rating}
                onChange={handleChange}
                onBlur={handleBlur}
                id="rating"
              />
            </div>
            {errors.rating && touched.rating && (
              <p className="error">{errors.rating}</p>
            )}

            <div className="inputfield">
              <label>Amount</label>
              <input
                type="text"
                className={
                  errors.amount && touched.amount
                    ? "input-error"
                    : "input"
                }
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                id="amount"
              />
            </div>
            {errors.amount && touched.amount && (
              <p className="error">{errors.amount}</p>
            )}
            <div className="inputfield">
              <label>Orginal Amount</label>
              <input
                type="text"
                className={
                  errors.orginalAmount && touched.orginalAmount
                    ? "input-error"
                    : "input"
                }
                value={values.orginalAmount}
                onChange={handleChange}
                onBlur={handleBlur}
                id="orginalAmount"
              />
            </div>
            {errors.orginalAmount && touched.orginalAmount && (
              <p className="error">{errors.orginalAmount}</p>
            )}
            <div className="inputfield">
              <label>Discount</label>
              <input
                type="text"
                className={
                  errors.discount && touched.discount
                    ? "input-error"
                    : "input"
                }
                value={values.discount}
                onChange={handleChange}
                onBlur={handleBlur}
                id="discount"
              />
            </div>
            {errors.discount && touched.discount && (
              <p className="error">{errors.discount}</p>
            )}
            <div className="inputfield">
              <label>Model Number</label>
              <input
                type="text"
                className={
                  errors.modelNumber && touched.modelNumber
                    ? "input-error"
                    : "input"
                }
                value={values.modelNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                id="modelNumber"
              />
            </div>
            {errors.modelNumber && touched.modelNumber && (
              <p className="error">{errors.modelNumber}</p>
            )}
            <div className="inputfield">
              <label>In Box</label>
              <input
                type="text"
                className={
                  errors.inBox && touched.inBox
                    ? "input-error"
                    : "input"
                }
                value={values.inBox}
                onChange={handleChange}
                onBlur={handleBlur}
                id="inBox"
              />
            </div>
            {errors.inBox && touched.inBox && (
              <p className="error">{errors.inBox}</p>
            )}
            <div className="inputfield">
              <label>Features</label>
              <input
                type="text"
                className={
                  errors.features && touched.features
                    ? "input-error"
                    : "input"
                }
                value={values.features}
                onChange={handleChange}
                onBlur={handleBlur}
                id="amount"
              />
            </div>
            {errors.features && touched.features && (
              <p className="error">{errors.features}</p>
            )}
            <div className="inputfield">
              <label>Warrenty</label>
              <input
                type="text"
                className={
                  errors.warrenty && touched.warrenty
                    ? "input-error"
                    : "input"
                }
                value={values.warrenty}
                onChange={handleChange}
                onBlur={handleBlur}
                id="warrenty"
              />
            </div>
            {errors.warrenty && touched.warrenty && (
              <p className="error">{errors.warrenty}</p>
            )}
            <div className="inputfield">
              <label>Colour</label>
              <input
                type="text"
                className={
                  errors.color && touched.color
                    ? "input-error"
                    : "input"
                }
                value={values.color}
                onChange={handleChange}
                onBlur={handleBlur}
                id="color"
              />
            </div>
            {errors.color && touched.color && (
              <p className="error">{errors.color}</p>
            )}
            <div className="inputfield">
              <label>Audio Jack</label>
              <input
                type="text"
                className={
                  errors.audioJack && touched.audioJack
                    ? "input-error"
                    : "input"
                }
                value={values.audioJack}
                onChange={handleChange}
                onBlur={handleBlur}
                id="audioJack"
              />
            </div>
            {errors.audioJack && touched.audioJack && (
              <p className="error">{errors.audioJack}</p>
            )}



            <div className="inputfield">
              <button type="submit" className="btn btn-primary inp" id="button">
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
            </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}
