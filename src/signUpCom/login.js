import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setUser} from "../store/reducer/userSlice";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import Form from "./form";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleLogin = (email, password) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user)
                dispatch(setUser({
                    email:user.email,
                    id:user.uid,
                    token:user.accessToken
                }));
                navigate("/")
            })
            .catch(()=>alert("Invalid email"))

    }

    return (
        <div>
            <Form
            handleClick={handleLogin}
            />
        </div>
    );
};

export default Login;