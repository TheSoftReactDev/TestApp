import React, { useState, useEffect } from "react";
import { loginUser } from "../PortalRedux/PortalAction";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import Axios from "axios";

const Login = () => {
  const dispatch = useDispatch();

  const [textValue, settextValue] = useState("");
  const [password, setpassword] = useState("");

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  useEffect(() => {});

  async function onSubmitClicked() {
    dispatch(loginUser(textValue));

    try {
      const { token, role } = await Axios.post("http://localhost:8080/login", {
        username: textValue,
        password: password,
      }).then((res) => {
        return res.data;
      });

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
    } catch {
      console.log("error occured");
    }
  }

  const textChanged = (event) => {
    settextValue(event.target.value);
  };
  const passchanged = (event) => {
    setpassword(event.target.value);
    console.log(password);
  };

  return (
    <div>
      {" "}
      {token && role === "user" ? (
        <Redirect to="/UserScreen"></Redirect>
      ) : role === "admin" ? (
        <Redirect to="/AdminScreen"></Redirect>
      ) : (
        <form>
          <h3>Login Page</h3>
          <label>Username</label>
          <input type="text" onChange={textChanged}></input>

          <input type="password" onChange={passchanged}></input>

          <button onClick={onSubmitClicked}> Submit</button>
        </form>
      )}
    </div>
  );
};

export default Login;
