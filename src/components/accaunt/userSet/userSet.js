import React, {useState} from 'react';

const UserSet = () => {
    const [name, setName] = useState(false)
    return (
        <div className="userSet">
            <h1>Site Setting</h1>
            <div className="userSet--lan">
                <div className="userSet--lan__first">
                    <h6>Language</h6>
                    <p>English</p>
                </div>
                <p className="userSet--lan__p" onClick={()=>{
                    setName(!name)
                }}>Edit</p>
            </div>
            <div className="userSet--currency">
                <div className="userSet--currency__first">
                    <h6>Currency</h6>
                    <p>$ - USA</p>
                </div>
                <p className="userSet--currency__p" >Edit</p>
            </div>

        </div>
    );
};

export default UserSet;