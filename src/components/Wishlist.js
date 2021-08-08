import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import "./Wishlist.css";
import { UseStateValue } from "./StateProvider";

function Wishlist({ id, category, itemName, img, price, qty }) {
  const [{ user, wishlist }, dispatch] = UseStateValue();
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id,
    });
  };
  const handleDec = () => {
    dispatch({
      type: "DECREMENT",
      cat: category,
      id,
    });
  };
  const handleInc = () => {
    dispatch({
      type: "INCREMENT",
      cat: category,
      id,
    });
  };
  return (
    <>
      <div className="wishlist__container">
        <div className="wishlist__img">
          <img src={img} alt={itemName} />
        </div>
        <div className="wishlist__title">
          <h2>{itemName}</h2>
        </div>
        <div className="wishlist__qty">
          <IconButton
            className="wishlist__icon__btn"
            onClick={() => handleDec()}
          >
            <RemoveIcon />
          </IconButton>
          <span>{qty}</span>
          <IconButton
            className="wishlist__icon__btn"
            onClick={() => handleInc()}
          >
            <AddIcon />
          </IconButton>
        </div>
        <div className="wishlist__dish__price">$ {price}</div>
        <div className="wishlist__remove__item">
          <button
            className="wishlist__remove__btn"
            onClick={() => removeItem(id)}
          >
            Remove
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Wishlist;
