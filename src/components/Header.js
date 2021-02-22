import React from "react";

import GoogleAuth from "./GoogleAuth";
import "./Header.css";

const Header = () => {
  // bd_nav
  return (
    <div className="ui huge menu top  fixed inverted stackable bd_nav">
      <div className="">
        <img src="/logo.svg" alt="BrightDrop" />
      </div>

      <div className="right menu">
        <div className="item">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};
export default Header;
