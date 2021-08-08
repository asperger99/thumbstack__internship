import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AppleIcon from "@material-ui/icons/Apple";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "./Footer.css";
import Button from "./Button";
// import {
//   FaGooglePlay,
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";
// import {AiFillApple} from "react-icons/ai"
// import {GrTwitter} from "react-icons/gr"

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <h1 style={{ color: "white" }}>Company</h1>
          <Link to="/#">About Us</Link>
          <Link to="/#">Contact Us</Link>
          <Link to="/#">Careers with Us</Link>
          <Link to="/#">Terms & Conditions</Link>
          <Link to="/#">Request Info</Link>
          <Link to="/#">Feedback</Link>
          <Link to="/#">Report a Problem</Link>
          <Link to="/#">Testimonials</Link>
          <Link to="/#">Privacy Policy</Link>
          <Link to="/#">Summons/Notices</Link>
          <Link to="/#">Safety Guidence</Link>
        </div>
        <div className="footer__right">
          <h1 style={{ color: "white" }}>Contact Us</h1>
          <h1 style={{ fontSize: "1rem", color: "grey" }}>
            Toll Free-1600 23 87877
          </h1>
          <p style={{ fontSize: "1rem", color: "grey" }}>
            Monday - Saturday (9:00Am to 7:00PM IST)
          </p>
          <h1 style={{ fontSize: "1rem", color: "grey" }}>
            Email-service@yummy.com
          </h1>
          <div className="footer__download">
            <h1 style={{ fontSize: "1rem" }}>Download the App</h1>
            <div className="footer__download__buttonbox">
              <Link to="/#" className="footer__download__button">
                <Button buttonStyle="__btn--outline">
                  <PlayArrowIcon style={{ fontSize: "2rem" }} /> Download{" "}
                </Button>
              </Link>
              <Link to="/#" className="footer__download__button">
                <Button buttonStyle="__btn--outline">
                  <AppleIcon style={{ fontSize: "2rem" }} /> Download
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__right__two">
          <h1 style={{ fontSize: "1.6rem" }}>Connect with Us</h1>
          <div className="footer__sociallinks">
            <a href="/#" className="footer__social__icons">
              <FacebookIcon />
            </a>
            <a href="/#" className="footer__social__icons">
              <InstagramIcon />
            </a>
            <a href="/#" className="footer__social__icons">
              <TwitterIcon />
            </a>
            <a href="/#" className="footer__social__icons">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
      <p
        style={{
          padding: "10px",
          backgroundColor: "#1c2237",
          color: "white",
          textAlign: "center",
        }}
      >
        copyright © Yummy!! 2021
      </p>
    </>
  );
}

export default Footer;
