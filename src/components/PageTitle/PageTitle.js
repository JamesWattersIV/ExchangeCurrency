import React from "react";

//Component Import
import PageHeading from "./PageHeading/PageHeading";
import PageSubHeading from "./PageSubHeading/PageSubHeading";

//SASS Improt
import "./PageTitle.scss";

const PageTitle = ({ headingOne, headingTwo, subHeading }) => {
  return (
    <div className="title-container">
      <PageHeading headingOne={headingOne} headingTwo={headingTwo} />
      <PageSubHeading subHeading={subHeading} />
    </div>
  );
};

export default PageTitle;
