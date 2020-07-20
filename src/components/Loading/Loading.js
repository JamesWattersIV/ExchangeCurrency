import React, { Fragment } from "react";
import spinner from "./spinner.gif";

//SCSS Import
import "./Loading.scss";

const Loading = () => {
  return (
    <Fragment>
      <div className="spinner-holder">
        <img
          src={spinner}
          style={{ width: "75px", margin: "auto", display: "block" }}
          alt="Loading..."
        />
      </div>
    </Fragment>
  );
};

export default Loading;
