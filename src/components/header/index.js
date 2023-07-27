import React, {useEffect, useRef, useState} from 'react';
import img from "../../assets/img/logo-89.png";
import {BiUserCircle} from "react-icons/bi";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../hooks/use-auth";
import {MdKeyboardArrowDown} from "react-icons/md";

const Header = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const headerLogRef = useRef(null);
    const headerModalRef = useRef(null);
    const [burger, setBurger] = useState(false)
    const toggleModal = () => setModalVisible(!modalVisible);

    const handleClickOutsideModal = (event) => {
        if (
            headerLogRef.current &&
            !headerLogRef.current.contains(event.target) &&
            headerModalRef.current &&
            !headerModalRef.current.contains(event.target) &&
            !event.target.classList.contains("header--log__icon") // Exclude clicks on the log icon
        ) {
            setModalVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideModal);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideModal);
        };
    }, []);
    const handleBurger = () => {
        setBurger(!burger)
    }
    const {isAuth} = useAuth();
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--logo">
                        <div className="header--logo__icon">
                            <img src={img} alt=""/>
                            <h3 style={{
                                color: burger ? "#0992D5" : ""
                            }}>Country travel <br/> Guide
                            </h3>
                        </div>
                        <div className="header--logo__pages">
                            <NavLink to="/"><h1>Main</h1></NavLink>
                            <NavLink to="/hotels"><h1>Hotels</h1></NavLink>

                            <NavLink to="/routes"><h1>Routes</h1></NavLink>
                            <NavLink to="/map"><h1>Map</h1></NavLink>
                            <NavLink to="/contacts"><h1>Contacts</h1></NavLink>


                            <div className="header--logo__pages--select">
                                <select name="language" id="1">
                                    <option value="language">language</option>
                                    <option value="usd">English</option>
                                    <option value="ru">Русский</option>
                                    <option value="cn">`中文</option>
                                    <option value="arab"> عربي</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="header--right">
                        <div className="header--right__log" ref={headerLogRef} onClick={toggleModal}>
                            <BiUserCircle className="header--right__log--icon"/>
                            <p>Account</p>
                        </div>
                        {modalVisible && (
                            <div className="header--right__modal" ref={headerModalRef}>
                                <NavLink to={isAuth ? "/account" : "/register"}
                                         className="p">{isAuth ? "Profile" : "Sign up"}</NavLink>
                                <NavLink to={"/login"} className="p">Log in</NavLink>
                            </div>
                        )}

                        <div className="header--right__burger" >
                            <div className="header--right__burger--icon" onClick={handleBurger}>
                             <span style={{
                                 transform: burger ? "translateY(18px) rotate(45deg)" : "",
                                 backgroundColor: burger ? "black" : "",
                                 transition: ".3s"
                             }}></span>
                                <span style={{
                                    display: burger ? "none" : "",

                                    transition: "1s"
                                }}></span>
                                <span style={{
                                    transform: burger ? "translateY(18px) rotate(-45deg)" : "",
                                    backgroundColor: burger ? "black" : "",

                                    transition: ".3s"
                                }}></span>

                            </div>
                            <div className="header--right__burger--pages" style={{
                                display: burger ? "block" : ""
                            }}>
                                <div className="header--right__burger--pages__nav">
                                    <NavLink to="/"><h1 onClick={handleBurger}>Main</h1></NavLink>
                                    <NavLink to="/hotels"><h1 onClick={handleBurger}>Hotels</h1></NavLink>

                                    <NavLink to="/routes"><h1 onClick={handleBurger}>Routes</h1></NavLink>
                                    <NavLink to="/map"><h1 onClick={handleBurger}>Map</h1></NavLink>
                                    <NavLink to="/contacts"><h1 onClick={handleBurger}>Contacts</h1></NavLink>


                                    <div className="header--right__burger--pages__nav--select">
                                        <select name="language" id="1">
                                            <option value="language">language</option>
                                            <option value="usd">English</option>
                                            <option value="ru">Русский</option>
                                            <option value="cn">`中文</option>
                                            <option value="arab"> عربي</option>
                                        </select>
                                            <MdKeyboardArrowDown className="header--right__burger--pages__nav--select__icon"/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

