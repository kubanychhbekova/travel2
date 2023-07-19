import React from "react";
import img from "../../assets/img/logo-89.png";
import { BiUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--logo">
            <div className="header--logo__icon">
              <img src={img} alt="" />
              <h3>
                Country travel <br /> Guide
              </h3>
            </div>
            <div className="header--logo__pages">
              <NavLink to="/">
                {" "}
                <h1>Main</h1>
              </NavLink>
              <NavLink to="/hotels">
                {" "}
                <h1>Hotels</h1>
              </NavLink>
              <NavLink to={"/aboutRoutes"}>
                <h1>Routes</h1>
              </NavLink>
              <h1>Map</h1>
              <h1>Contacts</h1>
              <div className="header--logo__pages--select">
                <select name="language" id="1">
                  <option value="language">language</option>
                  <option value="usd">English</option>
                  <option value="ru">Русский </option>
                  <option value="cn">`中文 </option>
                  <option value="arab">عربي </option>
                </select>
              </div>
            </div>
          </div>

          <div className="header--log">
            <BiUserCircle className="header--log__icon" />
            <p>Accaunt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
