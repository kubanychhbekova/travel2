import React, {useEffect} from 'react';
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../store/reducer/userSlice";
import { useNavigate} from 'react-router-dom'
import SignForm from "./signForm";

const SignUpCom = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate("/");
                // Save user authentication status and data in local storage
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('userEmail', user.email);
                localStorage.setItem('userId', user.uid);
                localStorage.setItem('userToken', user.accessToken);
            })
            .catch(console.error);
    };
    return (
<SignForm
handleClick={handleRegister}
/>
    );
};

export default SignUpCom;