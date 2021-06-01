import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <header className="Header">
      <h1>React Memory Card Game</h1>
      <button className="Header-btn">Start game</button>
      <p className="Header-tries">Tries: 0</p>
    </header>
  );
};

export default Header;
