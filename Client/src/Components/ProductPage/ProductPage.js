import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import { findProductById } from "../../Axios/Actions/HomeActions";
import Navbar from "../Navbar/Navbar";
import { Col, Container, Row} from "reactstrap";
import { motion } from "framer-motion";

function ProductPage() {
  const [details, setDetails] = useState("");
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchdata();

    async function fetchdata() {
      const data = await findProductById(id);
      setDetails(data.productDetails);
      console.log(data);
    }
  }, [id]);
  console.log(details);

  return (
    // <div>
    //   <Navbar/>
    //   <div className="app">
    //     {details
    //       ?
    //               <div className="details">
    //                 <div className="big-img">
    //                   <img src={details.Image} alt="" />
    //                 </div>
    //                 <div className="box">
    //                   <div className="product-name">
    //                     <h2>{details.productName}</h2>
    //                   </div>
    //                   <div className="product-brand">
    //                     <p>Brand : {details.brand}</p>
    //                   </div>
    //                   <div className="product-rating">
    //                     <p>Rating : {details.rating}</p>
    //                   </div>
    //                   <div className="product-price-details">
    //                     <h5>{details.amount}</h5>
    //                     <h6>
    //                       <s>{details.orginalAmount}</s>
    //                     </h6>
    //                   </div>
    //                   <div className="product-discount">
    //                     <p>{details.discount}</p>
    //                   </div>
    //                   <button className="product-cart">Add to cart</button>
    //                   <Link to="/cart">
    //                     <button className="product-buy">Buy now</button>
    //                   </Link>
    //                 </div>
    //               </div>
    //       : " sorry "}
    //   </div>
    // </div>
    <>
      <Navbar />
      <section className="pt-0 home ">
        <Container>
          <Row>
            <Col lg="6" sm='6' className="product__img">
              <img src={details.Image} alt="" />
            </Col>
            <Col lg="6" sm='6' >
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

export default ProductPage;
