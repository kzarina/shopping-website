import React from "react";
import "./header.css";
import { new01, new02, new03, new04, new05, new06 } from "../imports";

const Header = () => {
  return (
    <div className="header section__padding" id="new">
      <div className="header__content">
        <div className="header__content-div">
          <img src={new01} alt="cloth" />
          <p>Cold-shoulder pearl-button midi dress</p>
          <p>$ 119.99</p>
        </div>
        <div className="header__content-div">
          <img src={new02} alt="cloth" />
          <p>Embroidered monogram baseball cap</p>
          <p>$ 29.99</p>
        </div>
        <div className="header__content-div">
          <img src={new03} alt="cloth" />
          <p>Loose cargo trousers with elastic pants legs</p>
          <p>$ 79.99</p>
        </div>
        <div className="header__content-div">
          <img src={new04} alt="cloth" />
          <p>Ribbed jersey T-shirt with chain decor</p>
          <p>$ 64.99</p>
        </div>
        <div className="header__content-div">
          <img src={new05} alt="cloth" />
          <p>Mesh midi dress with fringed skirt</p>
          <p>$ 109.99</p>
        </div>
        <div className="header__content-div">
          <img src={new06} alt="cloth" />
          <p>Mini dress with concealed fastening and wide belt</p>
          <p>$ 99.99</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
