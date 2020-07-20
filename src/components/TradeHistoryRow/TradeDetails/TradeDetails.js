import React from "react";

//SCSS Import
import "./TradeDetails.scss";

const TradeDetails = ({ currency, amount }) => {
  const formatter = new Intl.NumberFormat("fr");
  return (
    <div className="date-col">
      <h3 className="currency">{currency}</h3>
      <h3>{formatter.format(amount)}</h3>
    </div>
  );
};

export default TradeDetails;
