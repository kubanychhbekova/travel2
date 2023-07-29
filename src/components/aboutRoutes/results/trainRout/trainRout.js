import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaTrain } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { RiHotelBedFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const TrainRout = () => {
  return (
    <div id="trainRout">
      <div className="container">
        <div className="trainRout">
          <div className="trainRout--blocks">
            <div className="trainRout--blocks__blockGrey">
              <h3>
                <AiOutlineArrowLeft />
                all results/ Route
              </h3>
              <h4>Train</h4>
              <div className="trainRout--blocks__blockGrey--price">
                <p>4h 35min</p>
                <h6>1-9 $</h6>
              </div>
            </div>
            <div className="trainRout--blocks__blockWhite">
              <div className="trainRout--blocks__blockWhite--bus">
                <FaTrain
                  style={{
                    fontSize: "25px",
                    color: "#0992d5",
                    marginLeft: "15px",
                  }}
                />
                <h5>
                  Bishkek 2
                  <br />
                  <span>Bishkek, Kyrgyzstan </span>
                </h5>
              </div>
              <div className="trainRout--blocks__blockWhite--Oclock1">
                <div className="trainRout--blocks__blockWhite--Oclock1__linea"></div>
                <h6>4h 2 minutes by train once a day</h6>
              </div>
              <div className="trainRout--blocks__blockWhite--place1">
                <div className="trainRout--blocks__blockWhite--place1__circle"></div>
                <h6>Rybachye (Balykchy) </h6>
              </div>
              <div className="trainRout--blocks__blockWhite--place2">
                <div className="trainRout--blocks__blockWhite--place2__circle"></div>
                <h6>Rybachye (Balykchy)</h6>
              </div>
              <div className="trainRout--blocks__blockWhite--Oclock2">
                <div className="trainRout--blocks__blockWhite--Oclock2__linea"></div>
                <h6>1h 24 minutes min on demand</h6>
              </div>
              <div className="trainRout--blocks__blockWhite--location">
                <HiLocationMarker
                  style={{
                    fontSize: "30px",
                    color: "#4E5754",
                    marginLeft: "15px",
                    marginLeft: "13px",
                    marginTop: "-15px",
                  }}
                />
                <h6>
                  Issyk-Kul (lake) <br />
                  <span>Issyk--Kul (lake), Kyrgyzstan</span>{" "}
                </h6>
              </div>
              <div className="trainRout--blocks__blockWhite--blockCircle">
                <div className="trainRout--blocks__blockWhite--blockCircle__circle"></div>
                <div className="trainRout--blocks__blockWhite--blockCircle__circle"></div>
                <div className="trainRout--blocks__blockWhite--blockCircle__circle"></div>
              </div>
              <div className="trainRout--blocks__blockWhite--hotels">
                <RiHotelBedFill
                  style={{
                    fontSize: "25px",
                    color: "#0992d5",
                    marginLeft: "28px",
                  }}
                />
                <h6>Find hotels in Issyk-Kul (lake)</h6>
                <NavLink to={"/hotels"}>
                  <p>
                    Find hotels <AiOutlineArrowRight />
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="trainRout--cart"></div>
        </div>
      </div>
    </div>
  );
};

export default TrainRout;
