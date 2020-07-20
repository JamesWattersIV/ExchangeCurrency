import React from "react";

//Import SCSS
import "./PageHeading.scss";

const PageHeading = ({ headingOne, headingTwo }) => {
  return (
    <div className="heading-holder">
      <h1> {headingOne} </h1> <h1 className="h1-pink">{headingTwo}</h1>
    </div>
  );
};

export default PageHeading;
