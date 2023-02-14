import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findProductByCategory } from "../../Axios/Actions/HomeActions";
import { Col, Container, Row } from "reactstrap";
export default function CCards(props) {
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
  console.log(details);
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
                  <Link to={`/client-product-details/${details._id}`}>
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
  )
}
