import React from "react";
import { Redirect } from "react-router";
import { Col, Row, Navbar, Container, Button } from "reactstrap";
import UserScreen from "./UserScreen";
import { Route, Switch } from "react-router-dom";
const Header = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log(token);
  const logout = () => {
    localStorage.clear();
    window.location.reload(true);
  };
  if (token) {
    return (
      <div>
        <Row
          style={{
            backgroundColor: "lightblue",
            height: "50px",
          }}
        >
          <Col sm="9" md="9" lg="9">
            Welcome to Darwin
          </Col>
          <Col sm="2" md="2" lg="2" style={{ verticalAlign: "bottom" }}>
            Hi, {role}
          </Col>
          <Col sm="1" md="1" lg="1" style={{ verticalAlign: "bottom" }}>
            <Button onClick={logout}>Logout</Button>
          </Col>
        </Row>
      </div>
    );
  } else return <Redirect to="/"></Redirect>;
};
export default Header;
