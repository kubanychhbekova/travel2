import React, {useState} from 'react';

const Personal = () => {
    const [name,setName]=useState(false)
    const [email,setEmail]=useState(false)
    const [phone,setPhone]=useState(false)
    const [birth,setBirth]=useState(false)
    const [home,setHome]=useState(false)
    return (
        <div className="personal">
            <h1>Personal information</h1>
            <div className="personal--name">
              <div className="personal--name__first">
                  <h6>Full Name</h6>
                  <p>John Jacob</p>
              </div>
                <div className="personal--name__second">
                    <div className="personal--name__second--inputs">
                        <div className="personal--name__second--inputs__input">
                            <p>Fist Name</p>
                            <input type="text"/>
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
            <div className="personal--name">
              <div className="personal--name__first">
                  <h6>Email</h6>
                  <p>john.jacob@gmail.com</p>
              </div>
                <p className="personal--name__p" onClick={()=>{
                    setEmail(!email)
                }}>Edit</p>
            </div>
            <div className="personal--name">
              <div className="personal--name__first">
                  <h6>Phone Number</h6>
                  <p>Not provided</p>
              </div>
                <p className="personal--name__p" onClick={()=>{
                    setPhone(!phone)
                }}>Add</p>
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