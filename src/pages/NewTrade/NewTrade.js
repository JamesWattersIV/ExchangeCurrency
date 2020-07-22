import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import TradeModal from "../../components/TradeModal/TradeModal";

//Firebase Import
import firebaseApp from "../../utils/firebase";
import { updateTradeHistory } from "../../utils/firebase";

//Import Context
import { TradeHistoryContext } from "../../context/history";

//SASS Import
import "./NewTrade.scss";

//Components Import
import SelectionCol from "../../components/SelectionCol/SelectionCol";
import TradeSummary from "../../components/TradeSummary/TradeSummary";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../Login/Button/Button";

const NewTrade = () => {
  //Move to utils
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //API endpoint
  const BASE_URL = "https://api.exchangeratesapi.io/latest";

  //useState and useContext Constants
  const [tradeHistory, setTradeHistory] = useContext(TradeHistoryContext);
  const [redirect, setRedirect] = useState(false);

  //Currency Selection Use States
  //TO:DO - Update to single object
  const [currOptions, setCurrOptions] = useState([]);
  const [fromCurr, setFromCurr] = useState();
  const [toCurr, setToCurr] = useState();
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState();

  //true when use is entering amount into From (Have) field
  const [isFromSelected, setIsFromSelected] = useState(true);

  //Modal Controls
  const [request, setRequest] = useState(false);

  //Variables for amount inputs
  //To faciliate FROM-TO and TO-FROM
  //Math.round((num + Number.EPSILON) * 100) / 100
  let toAmount, fromAmount;
  if (isFromSelected) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  //Run only once when the component is rendered
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurr(data.base);
        setToCurr(Object.keys(data.rates)[0]);
        setExchangeRate(Object.keys(data.rates)[0]);
      });
  }, []);

  //Run when fromCurr or toCurr is changed
  useEffect(() => {
    if (fromCurr != null && toCurr != null && fromCurr != toCurr) {
      try {
        fetch(`${BASE_URL}?base=${fromCurr}&symbols=${toCurr}`)
          .then((res) => res.json())
          .then((data) => setExchangeRate(data.rates[toCurr]));
      } catch (error) {
        console.log(error);
      }
    }
  }, [fromCurr, toCurr]);

  function submitRequest() {
    const date = new Date();
    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    const newTrade = {
      id: tradeHistory.length + 1,
      date: {
        day: day,
        month: month,
        year: year,
      },
      sold: {
        currency: fromCurr,
        amount: Math.floor(parseFloat(fromAmount) * 100) / 100,
      },
      bought: {
        currency: toCurr,
        amount: Math.floor(parseFloat(toAmount) * 100) / 100,
      },
    };
    setRequest(false);
    if (firebaseApp.auth().currentUser != null) {
      const UID = firebaseApp.auth().currentUser.uid;
      const updatedTrade = tradeHistory;
      updatedTrade.push(newTrade);
      updateTradeHistory(UID, updatedTrade);
    }
    setRedirect(true);
  }

  function handleFromChange(e) {
    setAmount(e.target.value);
    setIsFromSelected(true);
  }

  function handleToChange(e) {
    setAmount(e.target.value);
    setIsFromSelected(false);
  }

  function toggleRequest() {
    if (request) {
      setRequest(false);
    } else {
      setRequest(true);
    }
  }

  if (redirect === true) {
    return <Redirect to="/history" />;
  }

  return (
    <div className="new-trade-container">
      <PageTitle
        headingOne="Trade"
        headingTwo="Forex"
        subHeading="Buy and Sell"
      />
      <div className="trade-info">
        <h2>Create Your Trade</h2>
        <div className="hr"></div>
        <div className="selection-holder">
          <SelectionCol
            action="Sell:"
            currOptions={currOptions}
            selectedCurr={fromCurr}
            onChange={(e) => setFromCurr(e.target.value)}
            onChangeAmount={handleFromChange}
            amount={fromAmount}
          />
          <SelectionCol
            action="Buy:"
            currOptions={currOptions}
            selectedCurr={toCurr}
            onChange={(e) => setToCurr(e.target.value)}
            onChangeAmount={handleToChange}
            amount={toAmount}
          />
        </div>
        <Button
          type="button"
          className={
            (toAmount != 0 || fromAmount != 0) && toCurr != fromCurr
              ? "btn"
              : "btn disabled"
          }
          value="Place Request"
          onClick={toggleRequest}
        ></Button>
      </div>
      {request ? (
        <TradeModal
          request={request}
          setRequest={() => setRequest(false)}
          onAccept={submitRequest}
          TradeSummary={
            <TradeSummary
              fromCurr={fromCurr}
              toCurr={toCurr}
              fromAmount={fromAmount}
              toAmount={toAmount}
            />
          }
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default NewTrade;
