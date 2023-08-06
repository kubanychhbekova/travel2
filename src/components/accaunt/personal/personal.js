import React, {useState} from 'react';
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {useAuth} from "../../../hooks/use-auth";
import {useDispatch} from "react-redux";
import {updateName, updateEmail} from "../../../store/reducer/userSlice";
import {FaArrowLeft} from "react-icons/fa";
import {HiArrowLongLeft} from "react-icons/hi2";

const Personal = ({window}) => {
    const {isAuth, name, email} = useAuth()
    const [firstName, setFirstName] = useState(name.split(" ")[0])
    const [lastName, setLastName] = useState(name.split(" ")[1])
    const [changeEmail, setChangeEmail] = useState(email)
    const [inputName, setInputName] = useState(false)
    const [inputEmail, setInputEmail] = useState(false)
    const [inputPhone, setInputPhone] = useState(false)
    const [birth, setBirth] = useState(false)
    const [home, setHome] = useState(false)
    const [pass, setPass] = useState(false)
    const dispatch = useDispatch();
    const updatedName = `${firstName} ${lastName}`;

    const handleSaveName = () => {
        dispatch(updateName(updatedName))
        setInputName(false);
    };

    const handleSaveEmail = () => {
        dispatch(updateEmail(changeEmail))
        setInputEmail(false);
    };
    return (
        <div className="personal">
            <h1>Personal information</h1>
            <div className="personal--name">
                <div className="personal--name__first" style={{
                    display: inputName ? "none" : "block"
                }}>
                    <h6>Full Name</h6>
                    <p>{name} </p>
                </div>
                <div className="personal--name__second"
                     style={{
                         display: inputName ? "block" : "none"
                     }}>
                    <div className="personal--name__second--inputs">
                        <div className="personal--name__second--inputs__input">
                            <p>Fist Name</p>
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="personal--name__second--inputs__input">
                            <p>Last Name</p>
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <button onClick={handleSaveName}>save</button>
                </div>
                <p className="personal--name__p"
                   onClick={() => {
                       setInputName(!inputName)
                   }}>{inputName ? "Cancel" : "Edit"}</p>
            </div>
            <div className="personal--email">
                <div className="personal--email__first" style={{
                    display: inputEmail ? "none" : "block"
                }}>
                    <h6>Email</h6>
                    <p>{email}</p>
                </div>
                <div className="personal--email__second" style={{
                    display: inputEmail ? "block" : "none"
                }}>
                    <div className="personal--email__second--inputs">
                        <h6>Email</h6>
                        <input type="email"
                               value={changeEmail}
                               onChange={(e) => setChangeEmail(e.target.value)}
                        />
                        <h6>Confirm Password</h6>
                        <div className="personal--email__second--inputs__pass">
                            <input type="password"/>
                            <div className="personal--email__second--inputs__pass--btn"
                                 onClick={() => {
                                     setPass(!pass)
                                 }}>
                                {
                                    pass ? <AiFillEye className="icon"/>
                                        : <AiFillEyeInvisible className="icon"/>
                                }
                            </div>
                        </div>
                    </div>
                    <button onClick={handleSaveEmail}>SAVE</button>
                </div>
                <p className="personal--name__p" onClick={() => {
                    setInputEmail(!inputEmail)
                }}>{inputEmail ? "Cancel" : "Edit"}</p>
            </div>
            <div className="personal--phone">
                <div className="personal--phone__first" style={{
                    display: inputPhone ? "none" : "block"
                }}>
                    <h6>Phone Number</h6>
                    <p>+996 220 64 56 82</p>
                </div>
                <div className="personal--phone__second" style={{
                    display: inputPhone ? "block" : "none"
                }}>
                    <h6>Phone Number</h6>
                    <div className="personal--phone__second--inputs">
                        <select name="" id="">
                            <option value="">KG</option>
                            <option value="">EN</option>
                            <option value="">RU</option>
                            <option value="">عربي</option>
                            <option value="">中文</option>
                        </select>
                        <input type="tel"/>
                    </div>
                </div>
                <p className="personal--phone__p" onClick={() => {
                    setInputPhone(!inputPhone)
                }}>{inputPhone ? "Cancel" : "Add"}</p>
            </div>
            <div className="personal--name">
                <div className="personal--name__first">
                    <h6>Date of Birth</h6>
                    <p>12.01.2005</p>
                </div>
                <p className="personal--name__p" onClick={() => {
                    setBirth(!birth)
                }}>Add</p>
            </div>
            <div className="personal--name">
                <div className="personal--name__first">
                    <h6>Home Town</h6>
                    <p>Bishkek, KG</p>
                </div>
                <p className="personal--name__p" onClick={() => {
                    setHome(!home)
                }}>Edit</p>
            </div>
        </div>
    );
};

export default Personal;