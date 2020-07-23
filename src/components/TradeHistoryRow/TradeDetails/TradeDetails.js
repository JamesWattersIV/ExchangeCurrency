import React from "react";

//SCSS Import
import "./TradeDetails.scss";

//API for Flag

const TradeDetails = ({ currency, amount }) => {
  const formatter = new Intl.NumberFormat("fr");
  const BASE_URL = "https://www.countryflags.io/";
  const flag = BASE_URL + currency.substring(0, 2) + "/flat/64.png";

  return (
    <div className="date-col">
      <img className="flag" src={flag} alt="" />
      <h3 className="currency">{currency}</h3>
      <h3>{formatter.format(amount)}</h3>
    </div>
  );
};

export default TradeDetails;
