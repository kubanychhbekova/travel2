import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaBus } from "react-icons/fa";
import { RiPlaneFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { RiHotelBedFill } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const PlaneRout = () => {
  return (
    <div id="planeRout">
      <div className="container">
        <div className="planeRout">
          <div className="planeRout--blocks">
            <div className="planeRout--blocks__blockGrey">
              <h3>
                <AiOutlineArrowLeft />
                all results/ Route
              </h3>
              <h4>Plane</h4>
              <div className="planeRout--blocks__blockGrey--price">
                <p>4h 34min</p>
              </div>
            </div>
            <div className="planeRout--blocks__blockWhite">
              <div className="planeRout--blocks__blockWhite--bus">
                <FaBus
                  style={{
                    fontSize: "25px",
                    color: "#4E5754",
                    marginLeft: "15px",
                  }}
                />
                <h5>
                  Zavodskaya
                  <br />
                  <span>Bishkek, Kyrgyzstan </span>
                </h5>
              </div>
              <div className="planeRout--blocks__blockWhite--Oclock1">
                <div className="planeRout--blocks__blockWhite--Oclock1__linea"></div>
                <h6>
                  1 hour by bus Every 15 minutes
                  <br />
                  <span>1 $</span>
                </h6>
              </div>
              <div className="planeRout--blocks__blockWhite--place1">
                <div className="planeRout--blocks__blockWhite--place1__circle"></div>
                <h6>Bishkek Airport</h6>
              </div>
              <div className="planeRout--blocks__blockWhite--Transfer">
                <div className="planeRout--blocks__blockWhite--Transfer__blockCircle">
                  <div className="planeRout--blocks__blockWhite--Transfer__blockCircle--circle"></div>
                  <div className="planeRout--blocks__blockWhite--Transfer__blockCircle--circle"></div>
                  <div className="planeRout--blocks__blockWhite--Transfer__blockCircle--circle"></div>
                </div>
                <p>Transfer</p>
              </div>
              <div className="planeRout--blocks__blockWhite--plane">
                <RiPlaneFill
                  style={{
                    fontSize: "35px",
                    color: "#0992D5",
                    marginLeft: "10px",
                  }}
                />
                <h5>Manas (FRU)</h5>
              </div>
              <div className="planeRout--blocks__blockWhite--Oclock2">
                <div className="planeRout--blocks__blockWhite--Oclock2__linea"></div>
                <div className="planeRout--blocks__blockWhite--Oclock2__price">
                  <h6>
                    50 minutes <span>plane</span>{" "}
                  </h6>
                  <h5>75-360 $</h5>
                </div>
              </div>
              <div className="planeRout--blocks__blockWhite--place2">
                <div className="planeRout--blocks__blockWhite--place2__circle"></div>
                <h6>Almaty (ALA)</h6>
              </div>
              <div className="planeRout--blocks__blockWhite--place3">
                <div className="planeRout--blocks__blockWhite--place3__circle"></div>
                <h6>Almaty (ALA)</h6>
              </div>
              <div className="planeRout--blocks__blockWhite--Oclock3">
                <div className="planeRout--blocks__blockWhite--Oclock3__linea"></div>
                <h6>
                  2h 6minutes <span>on demand</span>
                </h6>
              </div>
              <div className="planeRout--blocks__blockWhite--location">
                <HiLocationMarker
                  style={{
                    fontSize: "30px",
                    color: "#4E5754",
                    marginLeft: "15px",
                    marginLeft: "13px",
                    marginTop: "-5px",
                  }}
                />
                <h6>
                  Issyk-Kul (lake) <br />
                  <span>Issyk-Kul (lake), Kyrgyzstan</span>{" "}
                </h6>
              </div>
              <div className="planeRout--blocks__blockWhite--blockCircle2">
                <div className="planeRout--blocks__blockWhite--blockCircle2__circle"></div>
                <div className="planeRout--blocks__blockWhite--blockCircle2__circle"></div>
                <div className="planeRout--blocks__blockWhite--blockCircle2__circle"></div>
              </div>
              <div className="planeRout--blocks__blockWhite--hotels">
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
                    Find hotels <AiOutlineArrowRight />{" "}
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="planeRout--carta"></div>
        </div>
      </div>
    </div>
  );
};

export default PlaneRout;
