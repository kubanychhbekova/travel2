import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaBus } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { RiHotelBedFill } from "react-icons/ri";

const BusRout = () => {
  return (
    <div id="busRout">
      <div className="container">
        <div className="busRout">
          <div className="busRout--blocks">
            <div className="busRout--blocks__blockGrey">
              <h3>
                <AiOutlineArrowLeft />
                all results/ Route
              </h3>
              <h4>Bus</h4>
              <div className="busRout--blocks__blockGrey--price">
                <p>4h 35min</p>
                <h6>4 $</h6>
              </div>
            </div>
            <div className="busRout--blocks__blockWhite">
              <div className="busRout--blocks__blockWhite--bus">
                <FaBus
                  style={{
                    fontSize: "25px",
                    color: "#0992d5",
                    marginLeft: "15px",
                  }}
                />
                <h5>
                  Bishkek Western Bus Station
                  <br />
                  <span>Bishkek, Kyrgyzstan </span>
                </h5>
              </div>
              <div className="busRout--blocks__blockWhite--Oclock1">
                <div className="busRout--blocks__blockWhite--Oclock1__linea"></div>
                <h6>
                  4h by bus every hour
                  <br />
                  <span>4 $</span>
                </h6>
              </div>
              <div className="busRout--blocks__blockWhite--place1">
                <div className="busRout--blocks__blockWhite--place1__circle"></div>
                <h6>Cholpon-Ata</h6>
              </div>
              <div className="busRout--blocks__blockWhite--place2">
                <div className="busRout--blocks__blockWhite--place2__circle"></div>
                <h6>Cholpon-Ata</h6>
              </div>
              <div className="busRout--blocks__blockWhite--Oclock2">
                <div className="busRout--blocks__blockWhite--Oclock2__linea"></div>
                <h6>35 min on demand</h6>
              </div>
              <div className="busRout--blocks__blockWhite--location">
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
                  <span>Issyk-Kul (lake), Kyrgyzstan</span>{" "}
                </h6>
              </div>
              <div className="busRout--blocks__blockWhite--blockCircle">
                <div className="busRout--blocks__blockWhite--blockCircle__circle"></div>
                <div className="busRout--blocks__blockWhite--blockCircle__circle"></div>
                <div className="busRout--blocks__blockWhite--blockCircle__circle"></div>
              </div>
              <div className="busRout--blocks__blockWhite--hotels">
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
        </div>
      </div>
    </div>
  );
};

export default BusRout;
