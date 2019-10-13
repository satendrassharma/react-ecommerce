import React, { useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";

import Store from "./store/Store";

import StoreContext from "./store/StoreContext";
import "./styles.css";

function App() {
  const storeContext = useContext(StoreContext);

  // get the products when app first renders
  useEffect(() => {
    storeContext.getProducts();
    console.log(storeContext);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Store>
    <App />
  </Store>,
  rootElement
);
