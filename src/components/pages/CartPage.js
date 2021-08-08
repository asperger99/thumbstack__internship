import React, { useState, useEffect } from "react";
import { pastries } from "../Data";
import Wishlist from "../Wishlist";
import Navbar from "../Navbar";
import "./CartPage.css";
import { UseStateValue } from "../StateProvider";
import jsPDF from "jspdf";

function CartPage() {
  const [{ item }, dispatch] = UseStateValue();
  const [total, setTotal] = useState(0);
  const [totalQty, setTotalQty] = useState(0);

  const generateBill = () => {
    var doc = new jsPDF("p", "pt"); //create new doc in jspdf
    doc.text(20, 20, "Your bill");

    ///set font
    doc.setFont("courier");
    let start = 40;
    let total = 0;
    item.forEach((i) => {
      let s1 = i.itemName + " : $" + i.price;
      let s2 = "quantity consumed" + " : " + i.qty;
      let s3 = "amount : $" + i.qty * i.price;

      total = total + i.price * i.qty;
      doc.text(20, start, s1);
      start += 20;
      doc.text(20, start, s2);
      start += 20;
      doc.text(20, start, s3);
      start += 20;
      start += 10;
    });
    start += 20;
    doc.setFont("default");
    doc.text(20, start, "Toatal amount to pay : $" + total);
    ///save pdf
    doc.save("bill.pdf");
  };

  useEffect(() => {
    let t = 0,
      tq = 0;
    item.forEach((m) => {
      if (m.inCart) {
        tq += m.qty;
        t = t + m.qty * m.price;
      }
    });
    setTotal(t);
    setTotalQty(tq);
  }, [item]);

  return (
    <>
      <Navbar />
      <div className="cart__container">
        <div className="cart__info">
          <h3>Your cart</h3>
          <p>You have {totalQty} intems in your cart</p>
        </div>

        <div className="cart__items">
          {item.map((w) => {
            if (w.inCart) {
              return <Wishlist {...w} />;
            }
          })}
        </div>

        <div className="cart__checkout">
          <h6>
            Total: <span>$ {total}</span>
          </h6>
          <button
            disabled={totalQty == 0}
            className={`${
              totalQty == 0 ? "disable__btn" : "wishlist__pay__btn "
            }`}
            onClick={() => generateBill()}
          >
            pay
          </button>
        </div>
      </div>
    </>
  );
}

export default CartPage;
