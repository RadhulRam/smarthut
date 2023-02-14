import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CNavbar from "../C-Navbar/CNavbar";
import {
  allCartProducts,
  cartProductDelete,
} from "../../Axios/Actions/UserActions";
import { toast } from "react-toastify";

export default function CCart() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchdata();

    async function fetchdata() {
      const token = localStorage.getItem("token");
      console.log(token);
      const data = await allCartProducts(token);
      setDetails(data.cartProduct);
      console.log(data);

    }
  }, []);

  async function deletefn(cartId,productId) {
    const token = localStorage.getItem("token");
    const data = await cartProductDelete(cartId,productId, token);
    console.log(details);
    toast.error("Product deleted");
  }

  return (
    <>
      <CNavbar />
      <section className="home">
        <Container>
          <Row>
            <Col lg="9">
              {details.map((details) => {
                return (
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src={details.product.Image} alt="" />
                        </td>
                        <td>{details.product.productName}</td>
                        <td>{details.product.amount}</td>
                        <td> {details.quantity} </td>
                        <td>
                          <motion.td whileTap={{ scale: 1.1 }}>
                            <i
                              class="ri-delete-bin-line"
                              onClick={() => {
                                deletefn(details._id,details.iteam);
                              }}
                            ></i>
                          </motion.td>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}
            </Col>

            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">68778</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                taxes and shipping will calculate in checout
              </p>
              <div className="product__">
                <button className="product__buy__button w-100 ">
                  <Link to="/client-checkout">Checkout</Link>
                </button>

                <button className="product__buy__button w-100 mt-3">
                  <Link to="/client-shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
