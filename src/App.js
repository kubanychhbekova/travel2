import './App.scss';
import Header from "../../travel2/src/components/header";
import Footer from "../../travel2/src/components/footer/footer";
import {Route, Routes} from "react-router-dom";
import Pages from "../../travel2/src/components/pages/pages";
import Hotels from "../../travel2/src/components/hotels/hotels";
import Detail from "../../travel2/src/components/popular/popularDetails/detail";
import HotelDetail from "../../travel2/src/components/hotels/hotelDetail/hotelDetail";
import Map from "../../travel2/src/components/map/map"
import Mission from "../../travel2/src/components/mission/mission"
import Use from "../../travel2/src/components/use/usePage"

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Pages/>}/>
                <Route path={"/hotels"} element={<Hotels/>}/>
                <Route path={"/popular/:id"} element={<Detail/>}/>
                <Route path={"/hotels/:id"} element={<HotelDetail/>}/>
                <Route path={"/map"} element={<Map/>}/>
                <Route path={"/mission"} element={<Mission/>}/>
                <Route path={"/use"} element={<Use/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
