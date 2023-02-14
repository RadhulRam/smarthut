import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import {  SmartPhoneDetails} from "../../Details/Details";

export default function AdminAllProducts() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    setDetails(SmartPhoneDetails);
  }, []);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {details.map((details) => {
                  return (
                    <tr >
                      <td><img src={details.Image} alt='' ></img></td>
                      <td>{details.productName}</td>
                      <td>{details.type}</td>
                      <td>{details.amount}</td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
