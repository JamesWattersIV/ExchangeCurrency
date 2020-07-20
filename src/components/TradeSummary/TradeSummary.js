import React from "react";

//SASS Impot
import "./TradeSummary.scss";

//Util Imports
import findCurrencyName from "../../utils/countryCodes";

const TradeSummary = ({ fromCurr, toCurr, fromAmount, toAmount, onClick }) => {
  function roundDecimal(val) {
    return Math.floor(parseFloat(val) * 100) / 100;
  }

  return (
    <div className="trade-summary-container">
      <h3>Review Your Trade</h3>
      <h4>Sell:</h4>
      <div className="summary-row">
        <div className="amount">{roundDecimal(fromAmount)}</div>
        <div className="curr">
          {fromCurr} - {findCurrencyName(fromCurr)}
        </div>
      </div>
      <hr />
      <h4>For:</h4>
      <div className="summary-row">
        <div className="amount">{roundDecimal(toAmount)}</div>
        <div className="curr">
          {toCurr} - {findCurrencyName(toCurr)}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TradeSummary;
