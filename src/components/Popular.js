import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import "./Dish.css";
import { UseStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Dish({ id, category, itemName, inCart, img, price, qty }) {
  return (
    <>
      <div className="dish_container">
        <div className="dish_container_img">
          <img src={img} alt={itemName} />
          <div className="dish_container__details">
            <h7>{itemName}</h7>
            <div className="dish_containr_quantity">
              <div className="dish__price">$ {price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dish;
