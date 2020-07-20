import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./routing/PrivateRoute";

//Page Imports
import Login from "./pages/Login/Login";
import NewTrade from "./pages/NewTrade/NewTrade";
import TradeHistiry from "./pages/TradeHistory/TradeHistory";

//Context Imports
import { AuthContext } from "./context/auth";
import { TradeHistoryProvider } from "./context/history";

//Component Imports
import NavBar from "./components/NavBar/NavBar";

//Import SCSS
import "./App.scss";

function App() {
  //Basic Token Authentication
  const currentTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(currentTokens);

  //set token in local storage
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Login} />
          {authTokens && authTokens != null ? <NavBar /> : <></>}
          <TradeHistoryProvider>
            <PrivateRoute exact path="/history" component={TradeHistiry} />
            <PrivateRoute exact path="/new-trade" component={NewTrade} />
          </TradeHistoryProvider>
        </Fragment>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
