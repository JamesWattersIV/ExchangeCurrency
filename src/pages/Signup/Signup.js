import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

//Component Import
import PageTitle from "../../components/PageTitle/PageTitle";
import Input from "../Login/Input/Input";
import Button from "../Login/Button/Button";

//SCSS Import
import "./Signup.scss";

//Util Import
import zxcvbn from "zxcvbn";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [goBack, setGoBack] = useState(false);
  const [passStrength, setPassStrength] = useState("");
  const [passMatch, setPassMatch] = useState("");
  const [cantSubmit, setCantSubmit] = useState(true);

  useEffect(() => {
    if (password) {
      checkStrength(zxcvbn(password).score);
    } else {
      setPassStrength("");
    }
  }, [password]);

  useEffect(() => {
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        setPassMatch("match");
        setCantSubmit(true);
      } else {
        setPassMatch("nomatch");
        setCantSubmit(false);
      }
    } else {
      setPassMatch("");
      setCantSubmit(false);
    }
  }, [confirmPassword, password]);

  if (goBack) {
    return <Redirect to="/" />;
  }

  const registerUser = () => {
    console.log("Registering User");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email);
      console.log(name);
      console.log(password);
      console.log(confirmPassword);
    } catch (error) {
      console.log(error);
    }
  };

  const checkStrength = (score) => {
    switch (score) {
      case 0:
        setPassStrength("weak");
        break;
      case 1:
        setPassStrength("med");
        break;
      case 2:
        setPassStrength("semi");
        break;
      case 3:
        setPassStrength("strong");
        break;
      case 4:
        setPassStrength("strongest");
        break;
      default:
        setPassStrength("");
    }
  };

  return (
    <div className="login-page">
      <div className="bg-image"></div>
      <div className="login-content">
        <PageTitle
          className="test"
          headingOne="Signup With"
          headingTwo="Exchange FX"
          subHeading="Please Enter Your Details"
        />
        <form onSubmit={(e) => onSubmit(e)}>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            fontAwesome="far fa-envelope"
            required={true}
          />
          <div className="signup-spacer"></div>
          <Input
            type="username"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Username"
            fontAwesome={"fas fa-user"}
            required={true}
          />
          <div className="signup-spacer"></div>
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
          <div className={"password-strength" + " " + passStrength}></div>
          <div className="signup-spacer"></div>
          <div className={"password-confirm " + passMatch}>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              placeholder="Confirm Password"
              fontAwesome={"fas fa-exclamation"}
              required={true}
            />
          </div>
          <div className="btn-row">
            <Button
              type="submit"
              className="btn"
              value="Register"
              disabled={cantSubmit ? false : true}
            />
            <Button
              type="button"
              className="btn alt"
              value="Cancel"
              onClick={() => setGoBack(true)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
