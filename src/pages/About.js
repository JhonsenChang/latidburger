import React from "react";
import MultiplePizzas from "../assets/lumayan.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Welcome to Latid Burger ! We're passionate about hamburgers and dedicated to delivering an extraordinary dining experience. Our team believes that a great hamburger is an art form, combining quality ingredients and expert preparation to create a symphony of flavors.</p>

        <p>At , we go beyond the ordinary. Our menu features a handpicked selection of classic favorites and daring creations that will tantalize your taste buds. Each burger is crafted with care, ensuring every bite is an unforgettable delight.</p>  

         <p> We pride ourselves on our commitment to innovation. We constantly push the boundaries to surprise and excite our customers. Our friendly and knowledgeable staff is here to guide you through our menu, helping you discover the perfect burger to satisfy your cravings. </p>
      </div>
    </div>
  );
}

export default About;