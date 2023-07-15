import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/hambur.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 className="textcoloor"> Ladid Burger </h1>
        <p className="textcoloor"> Get it or you will regret it</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;