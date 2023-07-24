import React from "react"
import byBus from "../../../back-end/byBus";

const Bus = () =>{
    return(
        <div id="bus">
            <div className="container">
                <div className="bus">
                  <center>
                    <h1>Popular bus destinations</h1>
                  </center>
             <div className="bus--card__rout">
              {byBus.map((el) => {
                return (
                  <div className="bus--card__rout--city">
                    <img src={el.img} alt="" />
                    <h1>{el.city}</h1>
                    {el.go.map((elem) => {
                      return (
                        <div className="bus--card__rout--city__go">
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
    )
}
export default Bus