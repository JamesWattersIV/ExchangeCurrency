import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context Import
import { TradeHistoryContext } from "../../context/history";

//import components
import TradeDate from "../../components/TradeHistoryRow/TradeDate/TradeDate";
import TradeDetails from "../../components/TradeHistoryRow/TradeDetails/TradeDetails";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../Login/Button/Button";

//SASS Import
import "./TradeHistory.scss";

const TradeHistory = () => {
  const [tradeHistory, setTradeHistory] = useContext(TradeHistoryContext);

  return (
    <div className="history-page">
      <PageTitle
        headingOne="Welcome"
        headingTwo="James"
        subHeading="Your Trade History"
      />
      <div className="grid-container">
        <div className="grid-row">
          <div className="col-1">
            <h2 className="col-heading">Date</h2>
          </div>
          <div className="col-2">
            {" "}
            <h2 className="col-heading">Currency Sold</h2>
          </div>
          <div className="col-3">
            {" "}
            <h2 className="col-heading">Currency Brought</h2>
          </div>
        </div>
        {tradeHistory.map((trade) => (
          <div key={trade.id} className="grid-row">
            <div className="col-1">
              <TradeDate
                day={trade.date.day}
                month={trade.date.month}
                year={trade.date.year}
              />
            </div>
            <div className="col-2">
              <TradeDetails
                currency={trade.sold.currency}
                amount={trade.sold.amount}
              />
            </div>
            <div className="col-3">
              <TradeDetails
                currency={trade.bought.currency}
                amount={trade.bought.amount}
              />
            </div>
          </div>
        ))}
      </div>
      <Link to="/new-trade">
        <Button type="button" className="btn" value="New Trade">
          New Trade
        </Button>
      </Link>
    </div>
  );
};

export default TradeHistory;
