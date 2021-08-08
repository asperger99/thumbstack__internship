import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import "./Dish.css";
import { UseStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Dish({ id, category, itemName, inCart, img, price, qty }) {
  const [{ user, wishlist }, dispatch] = UseStateValue();
  const addToWishlist = () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      id,
    });
  };
  const handleDec = () => {
    dispatch({
      type: "DECREMENT",
      id,
    });
  };
  const handleInc = () => {
    dispatch({
      type: "INCREMENT",
      id,
    });
  };
  return (
    <>
      <div className="dish_container">
        <div className="dish_container_img">
          <img src={img} alt={itemName} />
          <div className="dish_container__details">
            <h7>{itemName}</h7>
            <div className="dish_containr_quantity">
              <div>
                <IconButton className="icon__btn" onClick={() => handleDec()}>
                  <RemoveIcon />
                </IconButton>
                <span>{qty}</span>
                <IconButton className="icon__btn" onClick={() => handleInc()}>
                  <AddIcon />
                </IconButton>
              </div>
              <div className="dish__price">$ {price}</div>
            </div>
            {inCart ? (
              <Link to="/cart">
                <button className="addtocart__btn">go to cart</button>
              </Link>
            ) : (
              <button
                className="addtocart__btn"
                onClick={() => addToWishlist()}
              >
                add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dish;
