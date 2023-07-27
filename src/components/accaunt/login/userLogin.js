import React, {useState} from 'react';

const UserLogin = () => {
    const [name, setName] = useState(false)
    const [email,setEmail]=useState(false)
    return (
        <div className="userLogin">
            <h1>Login information</h1>
            <div className="userLogin--pass">
                <div className="userLogin--pass__first">
                    <h6>Password</h6>
                    <p>Not provided</p>
                </div>
                <p className="userLogin--pass__p" onClick={() => {
                    setName(!name)
                }}>Add</p>
            </div>
            <div className="userLogin--connect">
                <div className="userLogin--connect__first">
                    <h6>Connected Accounts</h6>
                    <p className="userLogin--connect__first--p1">Viator will only have access to your name and
                        email.</p>
                    <button>google</button>
                    <p className="userLogin--connect__first--p2">Connected</p>
                </div>
            </div>

        </div>
    );
};

export default UserLogin;