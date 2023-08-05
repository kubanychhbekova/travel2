import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserImage } from '../../store/reducer/userSlice';
import logo from "../../assets/img/user.png";
import { CgEnter } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Personal from "./personal/personal";
import UserLogin from "./login/userLogin";
import UserSet from "./userSet/userSet";
import { FiPlus } from "react-icons/fi";

const Account = () => {
    const [active, setActive] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);

    const dispatch = useDispatch();
    const userImage = useSelector((state) => state.user.userImage);
    useEffect(() => {
        const storedImage = localStorage.getItem('userImage');
        if (storedImage) {
            dispatch(updateUserImage(storedImage));
        }
    }, [dispatch]);

    const addAActive = () => {
        setActive(true);
        setActive3(false);
        setActive2(false);
    };
    const addAActive2 = () => {
        setActive(false);
        setActive2(true);
        setActive3(false);
    };
    const addAActive3 = () => {
        setActive(false);
        setActive2(false);
        setActive3(true);
    };
    console.log(userImage)
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                dispatch(updateUserImage(reader.result));
                localStorage.setItem('userImage', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const choose = () => {
        if (active) {
            return <Personal  />;
        } else if (active2) {
            return <UserLogin />;
        } else if (active3) {
            return <UserSet />;
        }
    };

    return (
        <div id="account">
            <div className="container">
                <div className="account">
                    <div className="account--left" >
                        <div className="account--left__logo" onClick={() => { }}>
                            {userImage ? (
                                <img src={userImage} alt="" />
                            ) : (
                                <>
                                    <img src={logo} alt="" />
                                    <FiPlus className="account--left__logo--plus" />
                                </>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: "block" }}
                            />
                        </div>

                        <div
                            className={`account--left__personal ${
                                active ? "active " : ""
                            }`}
                            onClick={addAActive}
                        >
                            <FaRegUserCircle className="icon" />
                            <h4>Personal information</h4>
                        </div>
                        <div className="border"></div>
                        <div
                            className={`account--left__personal ${
                                active2 ? "active " : ""
                            }`}
                            onClick={addAActive2}
                        >
                            <CgEnter className="icon" />
                            <h4>Login information</h4>
                        </div>
                        <div className="border"></div>
                        <div
                            className={`account--left__personal ${
                                active3 ? "active " : ""
                            }`}
                            onClick={addAActive3}
                        >
                            <AiOutlineSetting className="icon" />
                            <h4>Site Setting</h4>
                        </div>
                        <div className="border"></div>
                    </div>
                    <div className="account--right">{choose()}</div>
                </div>
            </div>
        </div>
    );
};

export default Account;
