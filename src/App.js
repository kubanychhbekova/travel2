import './App.scss';
import Header from "../../travel2/src/components/header";
import Footer from "../../travel2/src/components/footer/footer";
import {Route, Routes} from "react-router-dom";
import Pages from "../../travel2/src/components/pages/pages";
import Hotels from "../../travel2/src/components/hotels/hotels";
import Detail from "../../travel2/src/components/popular/popularDetails/detail";
import HotelDetail from "../../travel2/src/components/hotels/hotelDetail/hotelDetail";
import Details from './components/detailed/detailed';
import KyrgyzstanPage from './components/pages/kyrgyzstan/kyrgyzstan';
import Culture from './components/pages/culture/culture';
import Tradition from './components/pages/tradition/tradition';
import Contacts from './components/contacts/contacts';
function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path={"/"} element={<Pages/>}/>
          <Route path={"/hotels"} element={<Hotels/>}/>
          <Route path={"/popular/:id"} element={<Detail/>}/>
          <Route path={"/hotels/:id"} element={<HotelDetail/>}/>
          <Route path='/detailed' element={<Details/>}/>
          <Route path='/pages' element={<KyrgyzstanPage/>}/>
          <Route path='/page' element={<Culture/>}/>
          <Route path='/pagee' element={<Tradition/>}/>
          <Route path='/contacts' element={<Contacts/>}/>



        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
