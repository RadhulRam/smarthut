import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findProductByCategory } from "../../Axios/Actions/HomeActions";
import "./Cards.css";
import { Col, Container, Row } from "reactstrap";

function Cards(props) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    let value = false;
    if (props.SmartPhone) {
      value = "Smart Phone";
    } else if (props.SmartWatch) {
      value = "Smart Watch";
    } else {
      value = "Ear Buds";
    }
    fetchdata();
    async function fetchdata() {
      const data = await findProductByCategory(value);
      setDetails(data.productDetails);
    }
  }, [props]);

  return (
    <Container>
      <Row>
        <div className="center">
          <h3>{props.tittle}</h3>
        </div>

        <Col lg="4" md="6">
          <div className="rows">
            {details.map((details) => {
              return (
                <div className="colomn">
                  <Link to={`/product-details/${details._id}`}>
                    <div className="boxes">
                      <div className="card">
                        <div className="tag">
                          <div className="discounttag">{details.discount}</div>
                          <img src={details.Image} alt="" />
                        </div>
                        <div className="content">
                          <h3>{details.productName}</h3>
                          <div className="rating">
                            <span>Rating : {details.rating}</span>
                          </div>
                          <span className="amount">
                            {details.amount}
                            <s className="strike">{details.orginalAmount}</s>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
    
  );
}

export default Cards;
// let x = "hello"

// let y = "world"
// console.log(x+"and"+y+ "hi "+ 6);

// console.log(`${x} and ${y} hi 6`);


  /* <div className="product__item">
          <div className="product__img">
            <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71AvQd3VzqL._AC_UL480_QL65_.jpg" alt="" />
          </div>
          <div className="p-2" >
          <h3 className="product__name">OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)</h3>
          <span className="text-center" >Oneplus</span>
          </div>
          <div className="product__card-bottom d-flex align-items-center justify-content-between">
            <span className="price">₹18,999</span>
            <span><i class="ri-add-line"></i></span>
          </div>
      </div> */

