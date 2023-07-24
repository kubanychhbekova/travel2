import React, { useState} from 'react';
import {BsApple} from "react-icons/bs";
import google from ".././assets/img/google.png"
import facebook from ".././assets/img/facebook.png"

const SignForm = ({ handleClick}) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [userName, setUserName] = useState("");
    const [next, setNext] = useState(false)
    const handleNext = () => {
        if (next === false) {
            setNext(true)
        } else {
            handleClick(email, pass,userName)
            setEmail("")
            setPass("")
           setUserName("")

        }
    }

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
                               onChange={(e) => setEmail(e.target.value)}
                        />
                       <div style={{
                           display: next ? "block" : "none",
                       }} >
                           <p style={{textAlign:"start"}}>User name</p>
                           <input type="text"
                                  value={userName}
                                  onChange={(e) => setUserName(e.target.value)}

                           />
                           <p style={{textAlign:"start"}}>Password</p>
                           <input  type="password"
                                  value={pass}
                                  onChange={(e) => setPass(e.target.value)}

                           />
                       </div>
                        <button onClick={handleNext}>Continue</button>


                    </div>
                    <div className="sign--log">
                        <span> or continue with </span>
                    </div>
                    <div className="sign--btn">
                        <button className="sign--btn__img">
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