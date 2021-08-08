import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Button from "./Button";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { items } from "./Data";
import Popular from "./Popular";

function Home() {
  const [buyOrRent, setBuyOrRent] = useState("buy");

  return (
    <>
      <Navbar />

      <div className="home__searchbar ">
        <div className="searchbar__wrapper">
          <div className="hazzy__effect"></div>
          <div className="banner">
            <FastfoodIcon className="__banner-icon" />
            <h1 className="banner__heading">
              <span>eat something</span> Yummy!!
            </h1>
            <h3 className="banner__slogn">reward yourself</h3>
          </div>
        </div>
      </div>

      <div className="properties__title">
        <h1>Populars</h1>
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="myelements">
              <Popular {...items[0]} />
            </div>
          </div>
          <div class="carousel-item">
            <div className="myelements">
              <Popular {...items[6]} />
            </div>
          </div>
          <div className="carousel-item">
            <div className="myelements">
              <Popular {...items[3]} />
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="properties__bottom__button">
        <Link to="/order">
          <Button buttonStyle="__btn--outline" children="order now" />
        </Link>
      </div>
      <div className="postProperty"></div>

      <Footer />
    </>
  );
}

export default Home;
