import React from "react";

//SASS Impot
import "./TradeSummary.scss";

//Util Imports
import findCurrencyName from "../../utils/countryCodes";

const TradeSummary = ({ fromCurr, toCurr, fromAmount, toAmount, onClick }) => {
  function roundDecimal(val) {
    return Math.floor(parseFloat(val) * 100) / 100;
  }

  const BASE_URL = "https://www.countryflags.io/";
  const fromFlag = BASE_URL + fromCurr.substring(0, 2) + "/flat/64.png";
  const toFlag = BASE_URL + toCurr.substring(0, 2) + "/flat/64.png";

  return (
    <div className="trade-summary-container">
      <h3>Review Your Trade</h3>
      <h4>Sell:</h4>
      <div className="summary-row">
        <div className="amount">{roundDecimal(fromAmount)}</div>
        <div className="curr">
          {fromCurr}- {findCurrencyName(fromCurr)}
        </div>
        <img src={fromFlag} alt="" />
      </div>
      <hr />
      <h4>For:</h4>
      <div className="summary-row">
        <div className="amount">{roundDecimal(toAmount)}</div>
        <div className="curr">
          {toCurr} - {findCurrencyName(toCurr)}
        </div>
        <img src={toFlag} alt="" />
      </div>
      <hr />
    </div>
  );
};

export default TradeSummary;
