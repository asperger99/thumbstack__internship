import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CloseIcon from "@material-ui/icons/Close";
import { UseStateValue } from "./StateProvider";

function Navbar() {
  const [{ user, item }, dispatch] = UseStateValue();
  const [totalQty, setTotalQty] = useState(0);
  useEffect(() => {
    let t = 0,
      tq = 0;
    item.forEach((m) => {
      if (m.inCart) {
        tq += m.qty;
      }
    });

    setTotalQty(tq);
  }, [item]);

  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  const [button, setButton] = useState(true);
  function closeMobileMenu() {
    setClick(false);
  }

  function showButton() {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }
  window.addEventListener("resize", showButton);
  // console.log("new", user?.displayName);
  return (
    <>
      <div className="__navbar">
        <div className="__navbar-container __container">
          <Link to="/" className="__navbar-logo">
            <FastfoodIcon className="__navbar-icon" />
            YUMMY!!
          </Link>

          <div className="__menu-icon" onClick={handleClick}>
            {click ? <CloseIcon /> : <HorizontalSplitIcon />}
          </div>
          <ul className={click ? "__nav-menu active" : "__nav-menu"}>
            <li className="__nav-item">
              <Link
                to="/menu"
                className="__nav-links"
                onClick={closeMobileMenu}
              >
                Menu
              </Link>
            </li>
            <li className="__nav-item">
              <Link
                to="/order"
                className="__nav-links"
                onClick={closeMobileMenu}
              >
                Order
              </Link>
            </li>
            <li className="__nav-item">
              <Link
                to="/cart"
                className="__nav-links"
                onClick={closeMobileMenu}
              >
                <ShoppingCartIcon />
                <span className="cart__number"> {totalQty}</span>
              </Link>
            </li>

            <li className="__nav-btn">
              {button ? (
                user ? (
                  "none"
                ) : (
                  <Link
                    to="/login"
                    className="__btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="__btn--outline" children="SIGN IN" />
                  </Link>
                )
              ) : user ? (
                "none"
              ) : (
                <Link
                  to="/login"
                  className="__btn-link"
                  onClick={closeMobileMenu}
                >
                  <Button
                    buttonStyle="__btn--outline"
                    buttonSize="__btn--mobile"
                    children="SIGN IN"
                  />
                </Link>
              )}
            </li>
            <li className="__nav-btn">
              {button ? (
                user ? (
                  <button
                    className="signOut__button"
                    onClick={(e) => {
                      dispatch({ type: "CLEAR_WISHLIST", item: [] });
                    }}
                  >
                    sign out
                  </button>
                ) : (
                  <Link
                    to="/sign-up"
                    className="__btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="__btn--outline" children="SIGN UP" />
                  </Link>
                )
              ) : user ? (
                <button
                  className="signOut__button"
                  onClick={(e) => {
                    dispatch({ type: "CLEAR_WISHLIST", item: [] });
                  }}
                >
                  sign Out
                </button>
              ) : (
                <Link
                  to="/sign-up"
                  className="__btn-link"
                  onClick={closeMobileMenu}
                >
                  <Button
                    buttonStyle="__btn--outline"
                    buttonSize="__btn--mobile"
                    children="SIGN UP"
                  />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
