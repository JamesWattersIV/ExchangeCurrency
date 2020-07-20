import React, { useState, createContext } from "react";

//Export the context - import to get access to info
export const TradeHistoryContext = createContext();

//Export movie provider - gives access to the information
export const TradeHistoryProvider = (props) => {
  const [tradeHistory, setTradeHistory] = useState([
    {
      id: 1,
      date: {
        day: 31,
        month: "June",
        year: 2020,
      },
      sold: {
        currency: "ZAR",
        amount: 5000,
      },
      bought: {
        currency: "USD",
        amount: 294.25,
      },
    },
    {
      id: 2,
      date: {
        day: 20,
        month: "June",
        year: 2020,
      },
      sold: {
        currency: "GBP",
        amount: 2000,
      },
      bought: {
        currency: "EUR",
        amount: 2210.94,
      },
    },
  ]);

  return (
    <TradeHistoryContext.Provider value={[tradeHistory, setTradeHistory]}>
      {props.children}{" "}
      {/*Will render all components that are passed in as props*/}
    </TradeHistoryContext.Provider>
  );
};
