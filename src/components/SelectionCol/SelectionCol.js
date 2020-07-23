import React from "react";

//SASS Impot
import "./SelectionCol.scss";

//Util Imports
import findCurrencyName from "../../utils/countryCodes";

const SelectionCol = ({
  action,
  currOptions,
  selectedCurr,
  onChange,
  amount,
  onChangeAmount,
}) => {
  function roundDecimal(val) {
    return Math.floor(parseFloat(val) * 100) / 100;
  }

  return (
    <div className="selection-col">
      <h3>{action}</h3>
      <select value={selectedCurr} onChange={onChange}>
        {currOptions.map((curr) => (
          <option key={curr} value={curr}>
            {curr} - {findCurrencyName(curr)}
          </option>
        ))}
      </select>
      <h3>Amount:</h3>
      <input
        type="number"
        value={!amount || amount <= 0 ? 0 : roundDecimal(amount)}
        onChange={onChangeAmount}
      />
    </div>
  );
};

export default SelectionCol;
