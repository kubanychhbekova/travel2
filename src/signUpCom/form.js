import React, {useState} from 'react';
import {BsApple} from "react-icons/bs";
import google from ".././assets/img/google.png"
import facebook from ".././assets/img/facebook.png"
import {useDispatch} from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Form = () => {
    const dispatch=useDispatch()
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const handleLogin=(email,password)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

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
                        onChange={(e)=>setEmail(e.target.value)}/>
                        <div >
                            <p style={{textAlign:"start"}}>Password</p>
                            <input  type="password"
                                    value={pass}
                                    onChange={(e)=>setPass(e.target.value)}/>
                        </div>
                        <button onClick={()=>{
                            handleLogin(email,pass)
                        }}>Continue</button>


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

export default Form;
