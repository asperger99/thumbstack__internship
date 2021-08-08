import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Signup.css";
import { UseStateValue } from "./StateProvider";

function Signup() {
  const [{ user, wishlist }, dispatch] = UseStateValue();
  const [button, setButton] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //   const [tempUser, setTempUser] = useState(null);
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       console.log("yoo", authUser);
  //       dispatch({
  //         type: "UPDATE_USER",
  //         item: authUser,
  //       });
  //     } else {
  //       dispatch({
  //         type: "UPDATE_USER",
  //         item: null,
  //       });
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [user, fullName]);

  function showButton() {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }
  window.addEventListener("resize", showButton);

  const signUp = (event) => {
    // event.preventDefault();
    //   if (password === confirmPassword) {
    //     auth
    //       .createUserWithEmailAndPassword(email, password)
    //       .then((authUser) => {
    //         return authUser.user.updateProfile({
    //           displayName: fullName,
    //         });
    //       })
    //       .catch((error) => alert(error.message));
    //   } else {
    //     alert("confirmed password is different than password!!");
    //   }
  };

  return (
    <>
      <div className="signup-page">
        <div className="form-wrapper">
          <div className="form-container">
            <form>
              <div className="form-elements">
                <h1 className="signup__heading">Full name:</h1>
                <input
                  type="text"
                  name="fname"
                  className="form-input"
                  onChange={(e) => setFullName(e.target.value)}
                  required
                ></input>
              </div>
              <div className="form-elements">
                <h1 className="signup__heading">Email:</h1>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  required
                ></input>
              </div>
              <div className="form-elements">
                <h1 className="signup__heading">Password:</h1>
                <input
                  type="password"
                  name="pas"
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  required
                ></input>
              </div>
              <div className="form-elements">
                <h1 className="signup__heading">Confirm Password:</h1>
                <input
                  type="password"
                  name="cpas"
                  className="form-input"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                ></input>
              </div>
              <div className="form-elements">
                {button ? (
                  <Link to="/" onClick={signUp}>
                    <button className="signup__button" type="submit">
                      Sign Up
                    </button>
                  </Link>
                ) : (
                  <Link to="/" onClick={signUp}>
                    <button className="signup__button" type="submit">
                      Sign Up
                    </button>
                  </Link>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
