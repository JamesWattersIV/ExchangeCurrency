import React from "react";
import { Link } from "react-router-dom";

//Context Import
import { useAuth } from "../../context/auth";

//Firebase Import
import firebaseApp from "../../utils/firebase";

//SASS Impot
import "./NavBar.scss";

const NavBar = () => {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens(null);
    firebaseApp.auth().signOut();
  }

  return (
    <nav className="navbar-holder">
      <ul>
        <li>
          <Link className="nav-link" to="/history">
            Trade History
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/new-trade">
            New Trade
          </Link>
        </li>
        <li className="logout">
          <Link className="nav-link" to="/" onClick={logOut}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
