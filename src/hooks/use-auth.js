import {useSelector} from "react-redux";

export function useAuth() {
    const {email, token, id,userName} = useSelector(state => state.user)
    console.log("Redux state:", { email, token, id, userName });
    return {
        isAuth: !!email,
        email,
        token,
        id,
        userName,
    }
}