import "./App.scss";
import Header from "../../travel2/src/components/header";
import Footer from "../../travel2/src/components/footer/footer";
import { Route, Routes } from "react-router-dom";
import Pages from "../../travel2/src/components/pages/pages";
import Hotels from "../../travel2/src/components/hotels/hotels";
import Detail from "../../travel2/src/components/popular/popularDetails/detail";
import HotelDetail from "../../travel2/src/components/hotels/hotelDetail/hotelDetail";
import Details from './components/detailed/detailed';
import KyrgyzstanPage from './components/pages/kyrgyzstan/kyrgyzstan';
import Culture from './components/pages/culture/culture';
import Tradition from './components/pages/tradition/tradition';
import Contacts from './components/contacts/contacts';
import Map from "../../travel2/src/components/map/map"
import Mission from "../../travel2/src/components/mission/mission"
import Use from "../../travel2/src/components/use/usePage"
import LoginPage from "./components/signUp/loginPage";
import HomePage from "./components/signUp/homePage";
import RegisterPage from "./components/signUp/registerPage";
import Account from "./components/accaunt/account";
import AboutRoutes from "./components/aboutRoutes/aboutRoutes";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setUser} from "./store/reducer/userSlice";
import {useAuth} from "./hooks/use-auth";

function App() {
    const { isAuth } = useAuth();
    const dispatch = useDispatch();

    // Check for user authentication status on app initialization
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated === 'true') {
            // Get user data from local storage
            const userEmail = localStorage.getItem('userEmail');
            const userId = localStorage.getItem('userId');
            const userToken = localStorage.getItem('userToken');

            // Set the user as authenticated in the redux store or in your preferred state management solution
            dispatch(setUser({ email: userEmail, id: userId, token: userToken }));
        }
    }, [dispatch]);
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Pages/>}/>
                <Route path={"/hotels"} element={<Hotels/>}/>
                <Route path={"/popular/:id"} element={<Detail/>}/>
                <Route path={"/routes"} element={<AboutRoutes/>}/>
                <Route path={"/hotels/:id"} element={<HotelDetail/>}/>
                <Route path='/detailed' element={<Details/>}/>
                <Route path='/pages' element={<KyrgyzstanPage/>}/>
                <Route path='/page' element={<Culture/>}/>
                <Route path='/pagee' element={<Tradition/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path={"/map"} element={<Map/>}/>
                <Route path={"/mission"} element={<Mission/>}/>
                <Route path={"/use"} element={<Use/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/homePage"} element={<HomePage/>}/>
                <Route path={"/register"} element={<RegisterPage/>}/>
                <Route path={"/account"} element={<Account/>}/>

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
