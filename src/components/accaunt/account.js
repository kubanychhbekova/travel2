import React, {useState} from 'react';
import logo from "../../assets/img/logo.png"
import {CgEnter} from "react-icons/cg";
import {AiOutlineSetting} from "react-icons/ai";
import {FaRegUserCircle} from "react-icons/fa";
import Personal from "./personal/personal";
import UserLogin from "./login/userLogin";
import UserSet from "./userSet/userSet";

const Account = () => {
    const [active, setActive] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const addAActive = () => {
        setActive(true)
        setActive3(false)
        setActive2(false)
    }
    const addAActive2 = () => {
       setActive(false)
       setActive2(true)
       setActive3(false)

    }
    const addAActive3 = () => {
        setActive(false)
        setActive2(false)
        setActive3(true)


    }
    const choose=()=>{
        if(active){
          return   <Personal/>
        }else if(active2){
            return <UserLogin/>
        }else if(active3){
            return <UserSet/>
        }
    }
    console.log("hello")
    return (
        <div id="account">
            <div className="container">
                <div className="account">
                    <div className="account--left">
                        <img src={logo} alt=""/>
                        <div className={`account--left__personal ${active ? "active " : ""}`}
                             onClick={addAActive}
                        >
                            <FaRegUserCircle className="icon"/>
                            <h4>Personal information</h4>
                        </div>
                        <div className="border"></div>
                        <div className={`account--left__personal ${active2 ? "active " : ""}`}
                             onClick={addAActive2}
                        >
                            <CgEnter className="icon"/>
                            <h4>Login information</h4>

                        </div>
                        <div className="border"></div>
                        <div className={`account--left__personal ${active3 ? "active " : ""}`}
                             onClick={addAActive3}>
                            <AiOutlineSetting className="icon"/>
                            <h4>Site Setting</h4>
                        </div>
                        <div className="border"></div>

                    </div>
                    <div className="account--right">
                        {
                           choose()
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;