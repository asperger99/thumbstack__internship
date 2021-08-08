import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupPage from "./components/pages/SignupPage";
import LoginPage from "./components/pages/LoginPage.js";
import HomePage from "./components/pages/HomePage";
import "./App.css";
import MenuPage from "./components/pages/MenuPage";
import OrderPage from "./components/pages/OrderPage";
import CartPage from "./components/pages/CartPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/sign-up" exact component={SignupPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/menu" exact component={MenuPage} />
          <Route path="/order" children={<OrderPage />} />
          <Route path="/cart" exact component={CartPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
