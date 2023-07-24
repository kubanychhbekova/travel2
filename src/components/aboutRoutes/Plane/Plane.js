import React from "react";
import byPlane from "../../../back-end/byPlane";
const Plane = () => {
  return (
    <div id="plane">
      <div className="container">
        <div className="plane">
          <center>
            <h1>Popular flight destinations</h1>
          </center>
          <div className="plane--card__rout">
            {byPlane.map((el) => {
              return (
                <div className="plane--card__rout--city">
                  <img src={el.img} alt="" />
                  <h1>{el.city}</h1>
                  {el.go.map((elem) => {
                    return (
                      <div className="plane--card__rout--city__go">
                        <h4>{elem.city}</h4>
                        <h4>{elem.price.chas}</h4>
                        <h4>{elem.price.sena}</h4>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Plane;
