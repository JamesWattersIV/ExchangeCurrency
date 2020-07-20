import React, { useState } from "react";
import { Redirect, NavLink } from "react-router-dom";

//Context Import
import { useAuth } from "../../context/auth";

//Component Import
import PageTitle from "../../components/PageTitle/PageTitle";
import Input from "./Input/Input";
import Button from "./Button/Button";

//SCSS Import
import "./Login.scss";

const Login = () => {
  //TO:DO - Single Json object with one use state for updates
  const [loginError, setLoginError] = useState(false);
  const [signup, setSignup] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { authTokens, setAuthTokens } = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(
    authTokens === null ? false : true
  );
  const userPassword = "123456";
  const userEmail = "test";

  //Redirect to Trade History if user is already logged in
  if (isLoggedIn) {
    return <Redirect to="/history" />;
  }

  if (signup) {
    return <Redirect to="/signup" />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //axious post request or call to database to check user details
      if (userPassword === password && userEmail === userName) {
        setAuthTokens(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYwMjFiMDdkOGIwMDI0ZTNjMzY1OTUxIn0sImlhdCI6MTU5NDAxNjk4OSwiZXhwIjoxNTk0Mzc2OTg5fQ.nuKTpGnimoSDvgTettcd23OwdrnnoLlk_m6OYdMAp3U"
        );
        setLoggedIn(true);
      } else {
        setLoginError(true);
        setTimeout(() => {
          setLoginError(false);
        }, 3500);
      }
    } catch (error) {
      console.log(error);
    }
  };
  /*change 'username' back to 'email' after debugging*/

  return (
    <div className="login-page">
      <div className="bg-image"></div>
      <div className="login-content">
        <PageTitle
          headingOne="Welcome to"
          headingTwo="Exchange FX"
          subHeading="Buy and Sell Forex Easily, Safely, Online"
        />
        <form onSubmit={(e) => onSubmit(e)}>
          <Input
            type="username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Email"
            fontAwesome="far fa-envelope"
            required={true}
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            fontAwesome={"fas fa-key"}
            required={true}
          />
          <h3>Forgot Password?</h3>
          <div style={{ visibility: loginError ? "visible" : "hidden" }}>
            <h3>The username or password provided were incorrect!</h3>
          </div>
          <div className="btn-row">
            <Button type="submit" className="btn" value="Login" />
            <Button
              type="button"
              className="btn alt"
              value="Signup"
              onClick={() => setSignup(true)}
              disabled={false}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
