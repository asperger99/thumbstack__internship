import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [button, setButton] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function showButton() {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }
  window.addEventListener("resize", showButton);
  const LogIn = (event) => {
    //event.preventDefault();
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .catch((error) => alert(error.message));
  };
  return (
    <>
      <div className="signup-page">
        <div className="form-wrapper">
          <div className="form-container">
            <form>
              <div className="form-elements">
                <h1 className="login__heading">Email:</h1>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
              </div>
              <div className="form-elements">
                <h1 className="login__heading">Password:</h1>
                <input
                  type="password"
                  name="pas"
                  className="form-input"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
              </div>
              <div className="form-elements">
                {button ? (
                  <Link to="/" onClick={LogIn}>
                    <button className="login__button" type="submit">
                      Sign In
                    </button>
                  </Link>
                ) : (
                  <Link to="/" onClick={LogIn}>
                    <button className="login__button" type="submit">
                      Sign In
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

export default Login;
