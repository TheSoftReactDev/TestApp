import React, { useEffect } from "react";
import { Redirect } from "react-router";
import Axios from "axios";
import Header from "./Header";

const AdminScreen = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    const reqResponse = Axios.post("http://localhost:8080/AdminScreen", {
      role: role,
    }).then((res) => {
      return res;
    });
  }, []);

  if (token) {
    if (role === "admin")
      return (
        <div>
          <Header />
          <h1>This is Admin Screen </h1>
        </div>
      );
    else if (role === "user") {
      return <h1>forbidden Access</h1>;
    } else return <Redirect to="/"></Redirect>;
  } else return <Redirect to="/"></Redirect>;
};
export default AdminScreen;
