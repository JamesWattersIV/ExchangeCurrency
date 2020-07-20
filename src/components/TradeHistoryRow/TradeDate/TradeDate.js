import React from "react";

//SCSS Import
import "./TradeDate.scss";

const TradeDate = ({ day, month, year }) => {
  return (
    <div className="date-col">
      <h3>{day}</h3>
      <h3>{month}</h3>
      <h3>{year}</h3>
    </div>
  );
};

export default TradeDate;
