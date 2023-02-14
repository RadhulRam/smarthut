import CNavbar from "../C-Navbar/CNavbar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  findProductById } from "../../Axios/Actions/HomeActions";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { addToCart } from "../../Axios/Actions/UserActions";
import { toast } from "react-toastify";

export default function CProductPage() {
  const [details, setDetails] = useState("");
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    fetchdata();

    async function fetchdata() {
      const data = await findProductById(id);
      setDetails(data.productDetails);
      // console.log(data);
    }
  }, [id]);
  console.log(details);

  // carthandle();

  async function carthandle() {
    const token = localStorage.getItem("token");
    console.log(token);
    const data = await addToCart(id,token);
    console.log(data);
    toast.success('Product added successfully')
  }

  return (
    <>
      <CNavbar />
      <section className="pt-0 home ">
        <Container>
          <Row>
            <Col lg="6" sm="6" className="product__img">
              <img src={details.Image} alt="" />
            </Col>
            <Col lg="6" sm="6">
              <div className="product__details">
                <h2>{details.productName}</h2>
                <div className="product__rating">
                  <p>
                    <span>(Rating : {details.rating})</span>
                  </p>
                </div>
                <h4 className="product__price">
                  {details.amount}
                  <span>
                    <s>{details.orginalAmount}</s>
                  </span>
                </h4>
                <h6 className="product__discount">{details.discount}</h6>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="product__buy__button"
                  onClick={carthandle}
                >
                  Add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <h2 className="product__spec">Specifications</h2>

            <Col lg="12">
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>Product Name</td>
                    <td>{details.productName}</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>{details.brand}</td>
                  </tr>
                  <tr>
                    <td>Model Number</td>
                    <td>{details.modelNumber}</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>{details.type}</td>
                  </tr>
                  <tr>
                    <td>In Box</td>
                    <td>{details.inBox}</td>
                  </tr>
                  <tr>
                    <td>Features</td>
                    <td>{details.features}</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>{details.color}</td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td>{details.rating}</td>
                  </tr>
                  <tr>
                    <td>Audio-Jack</td>
                    <td>{details.audioJack}</td>
                  </tr>
                  <tr>
                    <td>Warrenty</td>
                    <td>{details.warrenty}</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
