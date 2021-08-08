import React from "react";
import "./Button.css";

const STYLES = ["__btn--primary", "__btn--outline", "__btn--menu"];
const SIZES = ["__btn--medium", "__btn--large", "__btn--mobile", "__btn--wide"];
const COLOR = ["__primary", "__blue", "__red", "__green"];

function Button(props) {
  const checkButtonStyle = STYLES.includes(`${props.buttonStyle}`)
    ? `${props.buttonStyle}`
    : STYLES[0];
  const checkButtonSize = SIZES.includes(`${props.buttonSize}`)
    ? `${props.buttonSize}`
    : SIZES[0];
  const checkButtonColor = COLOR.includes(`${props.buttonColor}`)
    ? `${props.buttonColor}`
    : null;
  // console.log(checkButtonSize)

  return (
    <button
      className={`__btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
export default Button;
