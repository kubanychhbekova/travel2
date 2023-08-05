import React, { useEffect, useState } from 'react';
import { BsApple } from 'react-icons/bs';
import google from '.././assets/img/google.png';
import facebook from '.././assets/img/facebook.png';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/reducer/userSlice";
import { useNavigate } from "react-router-dom";

const SignForm = () => {
    const [nextInput, setNextInput] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const storedName = localStorage.getItem('userName');
        const storedEmail = localStorage.getItem('userEmail');

        if (storedName && storedEmail) {
            setName(storedName);
            setEmail(storedEmail);
            setNextInput(true);
        }
    }, []);

    const handleRegister = (email, password, displayName) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateProfile(user, { displayName: displayName })
                    .then(() => user);
            })
            .then((user) => {
                localStorage.setItem('userName', user.displayName);
                localStorage.setItem('userEmail', user.email);
                navigate("/");
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid,
                    name: user.displayName
                }));
            })
            .catch(() => {
                alert("hello");
            });
    };

    const handleNext = () => {
        if (nextInput) {
            handleRegister(email, password, name);
        } else {
            setNextInput(true);
        }
    };

    return (
        <div id="sign">
            <div className="container">
                <div className="sign">
                    <div className="sign--title">
                        <h2>Log in and get exploring</h2>
                        <h6>Log into your account with your email, or create one below. Quick and easy - promise!</h6>
                    </div>
                    <div className="sign--input">
                        <p>Email</p>
                        <input type="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                        <div
                            style={{
                            display: nextInput ? "block" : "none",
                                marginLeft:"0"
                        }}
                        >
                            <p style={{textAlign: 'start'}}>User name</p>
                            <input type="text"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}/>
                            <p style={{textAlign: 'start'}}>Password</p>
                            <input type="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button onClick={handleNext}>Continue</button>
                    </div>
                    <div className="sign--log">
                        <span> or continue with </span>
                    </div>
                    <div className="sign--btn">
                        <button type="button" className="sign--btn__img">
                            <img src={google} alt=""/>
                        </button>
                        <button className="sign--btn__img">
                            <img src={facebook} alt=""/>
                        </button>
                        <button className="sign--btn__img">
                            <BsApple className="sign--btn__img--icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignForm;
