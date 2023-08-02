import React, {useEffect} from 'react';
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../store/reducer/userSlice";
import { useNavigate} from 'react-router-dom'
import SignForm from "./signForm";
import 'firebase/auth';
const SignUpCom = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleRegister = (email, password, userName) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                        userName: userName,
                    })
                );



                navigate("/");
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('userEmail', user.email);
                localStorage.setItem('userId', user.uid);
                localStorage.setItem('userToken', user.accessToken);
                localStorage.setItem('userName', userName);
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