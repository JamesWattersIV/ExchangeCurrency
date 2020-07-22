import React from "react";

//SASS Impot
import "./SelectionCol.scss";

//Util Imports
import findCurrencyName from "../../utils/countryCodes";

const BASE_URL = "https://www.countryflags.io/";

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

  const handleOnChange = (e) => {
    onChange(e);
  };

  let selectionOptions = [];
  currOptions.map((curr) => {
    selectionOptions.push({
      key: curr,
      text: curr + " - " + findCurrencyName(curr),
      value: curr,
      image: {
        avatar: true,
        src: "https://www.countryflags.io/be/flat/64.png",
      },
    });
  });

  return (
    <div className="selection-col">
      <h3>{action}</h3>
      {/*<Dropdown
        className={"select"}
        placeholder="Select A Currency"
        fluid
        selection
        options={selectionOptions}
        onChange={handleOnChange}
        value={selectedCurr}
      />*/}
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
