import React from "react";
import { BsSuitHeart, BsCartCheck } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="#new">Capitoha</a>
      </div>
      <div className="navbar__menu">
        <p>
          <a href="#new">New Arrivals</a>
        </p>
        <p>
          <a href="#clothing">Clothing</a>
        </p>
        <p>
          <a href="#accessories">Accessories</a>
        </p>
        <p>
          <a href="#sale">Sale</a>
        </p>
      </div>
      <div className="navbar__actions">
        <div>
          <input type="search" placeholder="Search..." />
        </div>
        <div>
          <VscAccount size={22} />
        </div>
        <div>
          <BsSuitHeart size={22} />
        </div>
        <div>
          <BsCartCheck size={22} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
