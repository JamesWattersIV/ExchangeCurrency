import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";

//Context Import
import { useAuth } from "../../context/auth";

//Component Import
import PageTitle from "../../components/PageTitle/PageTitle";
import Input from "./Input/Input";
import Button from "./Button/Button";
import Loading from "../../components/Loading/Loading";

//Firebase Import
import firebaseApp from "../../utils/firebase";

//SCSS Import
import "./Login.scss";

const Login = () => {
  //TO:DO - Single Json object with one use state for updates
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [signup, setSignup] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { authTokens, setAuthTokens } = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(
    authTokens === null ? false : true
  );

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
      setLoading(true);
      await firebaseApp.auth().signInWithEmailAndPassword(userName, password);
      const idToken = await firebaseApp
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true);
      setAuthTokens(idToken);
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setLoginError(true);
      setTimeout(() => {
        setLoginError(false);
      }, 5000);
    }
  };
  /*change 'username' back to 'email' after debugging*/

  return (
    <div className="login-page">
      {loading ? <Loading /> : <Fragment />}
      <div className="bg-image"></div>
      <div className="login-content">
        <PageTitle
          headingOne="Welcome to"
          headingTwo="Exchange FX"
          subHeading="Buy and Sell Forex Easily, Safely, Online"
        />
        <form onSubmit={(e) => onSubmit(e)}>
          <Input
            type="email"
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
