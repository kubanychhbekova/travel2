import React, { useState } from "react";
import PlaneRout from "./planeRout/planeRout";
import BusRout from "./busRout/busRout";
import TrainRout from "./trainRout/trainRout";

const Results = () => {
  const [showPlaneRout, setShowPlaneRout] = useState(true);
  const [showbusRout, setShowBusRout] = useState(false);
  const [showtrainRout, setShowTrainRout] = useState(false);

  const handleShowPlaneRout = () => {
    setShowPlaneRout(true);
    setShowBusRout(false);
    setShowTrainRout(false);
  };
  const handleShowBusRout = () => {
    setShowPlaneRout(false);
    setShowBusRout(true);
    setShowTrainRout(false);
  };
  const handleShowTrainRout = () => {
    setShowPlaneRout(false);
    setShowBusRout(false);
    setShowTrainRout(true);
  };
  return (
    <div id="results">
      <div className="container">
        <div className="results">
          <div className="results--blocks">
            <div className="content--blocks__byPlane">
              <h1 onClick={handleShowPlaneRout}>BY PLANE</h1>
              <div
                className="results--blocks__byPlane--linea"
                style={{
                  background: showPlaneRout ? "#0992d5" : "",
                }}
              ></div>
            </div>
            <div className="results--blocks__byBus">
              <h1 onClick={handleShowBusRout}>BY BUS</h1>
              <div
                className="results--blocks__byBus--linea"
                style={{
                  background: showbusRout ? "#0992d5" : "",
                }}
              ></div>
            </div>
            <div className="results--blocks__byTrain">
              <h1 onClick={handleShowTrainRout}>BY TRAIN</h1>
              <div
                className="results--blocks__byTrain--linea"
                style={{
                  background: showtrainRout ? "#0992d5" : "",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {showPlaneRout && <PlaneRout />}
      {showbusRout && <BusRout />}
      {showtrainRout && <TrainRout />}
    </div>
  );
};

export default Results;
