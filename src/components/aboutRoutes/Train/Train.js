import byTrain from "../../../back-end/byTrain";

const Train = () => {
  return (
    <div id="train">
      <div className="container">
        <div className="train">
          <center>
            <h1>Popular train destinations</h1>
          </center>
          <div className="train--card__rout">
            {byTrain.map((el) => {
              return (
                <div className="train--card__rout--city">
                  <img src={el.img} alt="" />
                  <h1>{el.city}</h1>
                  {el.go.map((elem) => {
                    return (
                      <div className="train--card__rout--city__go">
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
export default Train;
