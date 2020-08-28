import React from "react";
import { Redirect } from "react-router";
import { Row, Col } from "reactstrap";
import Header from "./Header";

const UserScreen = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  if (token) {
    return (
      <Row>
        <Header />
        <Col>
          <h1>This is User Screen </h1>;
        </Col>
      </Row>
    );
  } else return <Redirect to="/"></Redirect>;
};
export default UserScreen;
