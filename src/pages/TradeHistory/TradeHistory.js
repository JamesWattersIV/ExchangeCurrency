import React, { useContext, useState, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

//Context Import
import { TradeHistoryContext } from "../../context/history";

//import components
import TradeDate from "../../components/TradeHistoryRow/TradeDate/TradeDate";
import TradeDetails from "../../components/TradeHistoryRow/TradeDetails/TradeDetails";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../Login/Button/Button";
import Loading from "../../components/Loading/Loading";

//Firebase Import
import firebaseApp from "../../utils/firebase";

//SASS Import
import "./TradeHistory.scss";

const TradeHistory = () => {
  const [tradeHistory, setTradeHistory] = useContext(TradeHistoryContext);
  const [loading, setLoading] = useState(true);
  const [userName, setUsername] = useState("");

  if (loading) {
    firebaseApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        const UID = firebaseApp.auth().currentUser.uid;
        getTradeData(UID);
      } else {
        // No user is signed in.
        return <Redirect to="/" />;
      }
    });
  }

  //Run only when UID is changed
  const getTradeData = (UID) => {
    const docData = firebaseApp.firestore().collection("users").doc(UID);
    docData
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setTradeHistory(doc.data().trades);
          setUsername(doc.data().username);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .then(setLoading(false))
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };

  return (
    <div className="history-page">
      {loading ? <Loading /> : <Fragment />}
      <PageTitle
        headingOne="Welcome"
        headingTwo={userName}
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
      <Link to="/new-trade" className="new-trade-button">
        <Button type="button" className="btn newtrade" value="New Trade">
          New Trade
        </Button>
      </Link>
    </div>
  );
};

export default TradeHistory;
