import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { items } from "../Data";
import Button from "../Button";
import "./MenuPage.css";

function MenuPage() {
  const [selected, setSelected] = useState("pastries");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    let temp = [];

    temp = items.map((i) => {
      if (i.category == selected) return i;
    });

    setMenu(temp);
  }, [selected]);

  return (
    <>
      <Navbar />

      <div className="menupage__container">
        <h1>Menu</h1>
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
        <div className="menu__body">
          <h3>{selected}</h3>
          <img src="" alt="" />
          {menu?.map((m) => {
            if (m) {
              return (
                <>
                  <div className="menu__item">
                    <h3>{m.itemName}</h3>
                    <h3>
                      $ {m.price}
                      <span> / {m.qty}pc</span>
                    </h3>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default MenuPage;
