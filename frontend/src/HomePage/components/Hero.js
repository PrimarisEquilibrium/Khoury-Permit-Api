import React from "react";
import "./styles/hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="hero-img" />
      <div className="hero-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        adipisci.
      </div>
    </div>
  );
}

export default Hero;
