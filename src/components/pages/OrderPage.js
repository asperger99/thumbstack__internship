import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button";
import Dish from "../Dish";
// import { cityProperties } from "../Data";
import Navbar from "../Navbar";
import "./OrderPage.css";
import { UseStateValue } from "../StateProvider";

function OrderPage() {
  const [{ item }, dispatch] = UseStateValue();
  const [selected, setSelected] = useState("pastries");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    console.log("from orderPage menu-->", menu);
    let temp = new Array();

    temp = item.map((i) => {
      if (i.category === selected) {
        return i;
      }
    });

    setMenu(temp);
    console.log("from orderPage-->", temp);
  }, [selected, item]);

  useEffect(() => {}, []);

  return (
    <>
      <Navbar />

      <div className="orderPage__container">
        <div className="menu__options">
          <Button
            buttonStyle={
              selected == "pastries" ? "__btn--menu" : "__btn--primary"
            }
            onClick={() => setSelected("pastries")}
            children="pestries"
          />
          <Button
            buttonStyle={
              selected == "nonveg" ? "__btn--menu" : "__btn--primary"
            }
            onClick={() => setSelected("nonveg")}
            children="non-veg"
          />
        </div>
        <div className="order__body">
          {menu?.map((m) => {
            if (m) return <Dish key={m.id} {...m} />;
          })}
        </div>
      </div>
    </>
  );
}

export default OrderPage;
