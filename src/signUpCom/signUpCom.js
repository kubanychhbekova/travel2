import React from 'react';
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
            .then(({user})=>{
                dispatch(setUser({
                    email:user.email,
                    id:user.uid,
                    token:user.accessToken,

                }));
                navigate("/")
                console.log(auth)
            })
            .catch(console.error);

    }
    return (
<SignForm
handleClick={handleRegister}
/>
    );
};

export default SignUpCom;