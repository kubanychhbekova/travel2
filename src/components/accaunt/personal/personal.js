import React, {useState} from 'react';
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";

const Personal = () => {
    const [name,setName]=useState(false)
    const [email,setEmail]=useState(false)
    const [phone,setPhone]=useState(false)
    const [birth,setBirth]=useState(false)
    const [home,setHome]=useState(false)
    const [pass ,setPass]=useState(false)
    return (
        <div className="personal">
            <h1>Personal information</h1>
            <div className="personal--name">
              <div className="personal--name__first" style={{
                  display:name ? "none" : "block"             }}>
                  <h6>Full Name</h6>
                  <p>John Jacob</p>
              </div>
                <div className="personal--name__second"
                style={{
                    display:name ? "block" : "none"
                }}>
                    <div className="personal--name__second--inputs">
                        <div className="personal--name__second--inputs__input">
                            <p>Fist Name</p>
                            <input type="text" />
                        </div>
                        <div className="personal--name__second--inputs__input">
                            <p>Last Name</p>
                            <input type="text"/>
                        </div>
                    </div>
                    <button>save</button>
                </div>
                <p className="personal--name__p"
                   onClick={()=>{
                    setName(!name)
                }}>{name ? "Cancel" : "Edit"}</p>
            </div>
            <div className="personal--email">
              <div className="personal--email__first" style={{
                  display:email ? "none" :"block"
              }}>
                  <h6>Email</h6>
                  <p>john.jacob@gmail.com</p>
              </div >
              <div className="personal--email__second" style={{
                  display : email ? "block" : "none"
              }}>
                  <div className="personal--email__second--inputs">
                      <h6>Email</h6>
                      <input type="email"/>
                      <h6>Confirm Password</h6>
                  <div className="personal--email__second--inputs__pass">
                      <input type="password"/>
                    <div className="personal--email__second--inputs__pass--btn"
                         onClick={()=>{
                             setPass(!pass)
                         }}>
                        {
                            pass ? <AiFillEye className="icon"/>
                                :     <AiFillEyeInvisible className="icon"/>
                        }
                    </div>
                  </div>
                  </div>
                  <button>SAVE</button>
              </div>
                <p className="personal--name__p" onClick={()=>{
                    setEmail(!email)
                }}>{email ? "Cancel" : "Edit"}</p>
            </div>
            <div className="personal--phone">
              <div className="personal--phone__first" style={{
                  display: phone ? "none" : "block"
              }}>
                  <h6>Phone Number</h6>
                  <p>Not provided</p>
              </div>
              <div className="personal--phone__second" style={{
                  display: phone ? "block" : "none"
              }}>
                  <h6>Phone Number</h6>
              <div className="personal--phone__second--inputs">
                  <select name="" id="">
                      <option value="">English</option>
                      <option value="">Русский</option>
                      <option value="">عربي</option>
                      <option value="">中文</option>
                  </select>
                  <input type="tel"/>
              </div>
              </div>
                <p className="personal--phone__p" onClick={()=>{
                    setPhone(!phone)
                }}>{phone ? "Cancel" : "Add"}</p>
            </div>
            <div className="personal--name">
              <div className="personal--name__first">
                  <h6>Date of Birth</h6>
                  <p>Not provided</p>
              </div>
                <p className="personal--name__p" onClick={()=>{
                    setBirth(!birth)
                }}>Add</p>
            </div>
            <div className="personal--name">
              <div className="personal--name__first">
                  <h6>Home Town</h6>
                  <p>Bishkek, KG</p>
              </div>
                <p className="personal--name__p" onClick={()=>{
                    setHome(!home)
                }}>Edit</p>
            </div>
        </div>
    );
};

export default Personal;