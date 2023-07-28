import React, { useState } from "react";
import Train from "../Train/Train";
import Bus from "../Bus/Bus";
import Plane from "../Plane/Plane";
import Results from "../results/results";

const Content = () => {
  const [showTrain, setShowTrain] = useState(false);
  const [showBus, setShowBus] = useState(false);
  const [showPlane, setShowPlane] = useState(true);
  const [showResults, setShowResults] = useState(false);
const [select,setSelect]=useState("Where from?")
  const handleShowTrain = () => {
    setShowTrain(true);
    setShowBus(false);
    setShowPlane(false);
  };

  const handleShowBus = () => {
    setShowTrain(false);
    setShowBus(true);
    setShowPlane(false);
  };

  const handleShowPlane = () => {
    setShowTrain(false);
    setShowBus(false);
    setShowPlane(true);
  };

  const handleShowResults = () => {
    setShowTrain(false);
    setShowBus(false);
    setShowPlane(false);
    setShowResults(true);
  };

  return (
    <div id="content">
      <div className="container">
        <div className="content">
          <div className="content--search">
            <div
              className="content--search__block1"
              
            >
              <h4>{select}</h4>
            </div>
            <div className="content--search__block2">
              <h4>Where to?</h4>
            </div>
            <div className="content--search__btn">
              <button onClick={handleShowResults}>Search</button>
            </div>
          </div>
          <div className="content--selects">
            <div className="content--selects__select1" onClick={(e)=>{
            setSelect(e.target.innerText)
            }}> 
              <h4>YSYK-KOL</h4>
              <h4>Bishkek</h4>
              <h4>Cholpon-Ata</h4>
              <h4>Ysyk-Ata</h4>
              <h4>Osh</h4>
              <h4>Talas</h4>
              <h4>Naryn</h4>
            </div>

            <div className="content--selects__select2">
              <h4>Ysyk-kol</h4>
              <h4>Bishkek</h4>
              <h4>Cholpon-Ata</h4>
              <h4>Ysyk-Ata</h4>
              <h4>Osh</h4>
              <h4>Talas</h4>
              <h4>Naryn</h4>
            </div>
          </div>

          <div className="content--blocks" style={{
            display :showResults ? "none" : ""
          }}>
            <div className="content--blocks__byPlane">
              <h1 onClick={handleShowPlane}>BY PLANE</h1>
              <div
                className="content--blocks__byPlane--linea"
                style={{
                  background: showPlane ? "#0992d5" : "",
                }}
              ></div>
            </div>
            <div className="content--blocks__byBus">
              <h1 onClick={handleShowBus}>BY BUS</h1>
              <div
                className="content--blocks__byBus--linea"
                style={{
                  background: showBus ? "#0992d5" : "",
                }}
              ></div>
            </div>
            <div className="content--blocks__byTrain">
              <h1 onClick={handleShowTrain}>BY TRAIN</h1>
              <div
                className="content--blocks__byTrain--linea"
                style={{
                  background: showTrain ? "#0992d5" : "",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {showTrain && <Train />}
      {showBus && <Bus />}
      {showPlane && <Plane />}
      {showResults && <Results />}
    </div>
  );
};

export default Content;
