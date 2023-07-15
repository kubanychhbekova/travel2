import React from 'react';

const HotelDetailPage = ({cards}) => {
    return (
        <>
            {
                cards.map((el) => {
                    return (
                        <div key={el.id} id="hotelPage">
                            <div className="container">
                                <div className="hotelPage">
                                  <div className="hotelPage--title">
                                      <h1>{el.title}</h1>
                                  </div>
                                    <div className="hotelPage--photos">
                                        <div className="hotelPage--photos__top">
                                          <div className="hotelPage--photos__top--left">
                                              {
                                                  el.img2.map((el)=>{
                                                      return(
                                                          <div key={el.id}>
                                                              <img src={el} alt=""/>
                                                          </div>
                                                      )
                                                  })
                                              }
                                          </div>
                                            <img className="hotelPage--photos__top--img" src={el.img1} alt=""/>
                                        </div>
                                        <div className="hotelPage--photos__bottom">
                                            {
                                                el.img3.map((el)=>{
                                                    return(
                                                        <div key={el.id}>
                                                            <img src={el} alt=""/>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="hotelPage--bottom">
                                        <div className="hotelPage--bottom__text">
                                            <p>{el.description}</p>

                                        </div>
                                        <div className="hotelPage--bottom__map">
                                            <img src={el.address} alt="" useMap="./hotelDetailPage#Navigation"/>
                                            <map name="Navigation">
                                                <area shape="default" coords="" href={el.address2} alt=""/>
                                            </map>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default HotelDetailPage;