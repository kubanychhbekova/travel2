import React from 'react';
import img from "../../assets/img/logo-89.png"
import logo from "../../assets/img/image 2.png"
import logo1 from "../../assets/img/image 3.png"
import logo2 from "../../assets/img/image 4.png"
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--logo">
                        <img src={img} alt=""/>
                        <h4>Country Travel <br/>Guide
                        </h4>
                    </div>
                    <div className="footer--center">
                        <ul>
                            <NavLink to="/mission">
                                <li>Our mission/Stability</li>
                            </NavLink>
                            <NavLink to="/use">
                                <li>Terms of use</li>
                            </NavLink>
                            <li>Feedback</li>
                            <li>Privacy policy</li>

                        </ul>
                    </div>
                    <div className="footer--icons">

                        <a href="./footer#"><img src={logo1} alt=""/></a>
                        <a href="./footer#"><img src={logo} alt=""/></a>
                        <a href="./footer#"><img src={logo2} alt=""/></a>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;