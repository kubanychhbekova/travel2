import React from 'react';

import {ImStarFull} from "react-icons/im";

const HotelDetailPage = ({cards}) => {
    const renderStars = (starCount) => {
        const stars = [];
        for (let i = 0; i < starCount; i++) {
            stars.push(<ImStarFull key={i} />);

        }
  return stars
    };
    return (
        <>
            {
                cards.map((el) => {
                    return (
                        <div key={el.id} id="hotelPage">
                            <div className="container">
                                <div className="hotelPage">
                                  <div className="hotelPage--title">
                                    <p> {renderStars(el.star)}</p>
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
                                                            <img src={el.one} alt=""/>
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
                                            {/*<img src={el.address} alt="" useMap="#Navigation"/>*/}
                                            {/*<map name="Navigation">*/}
                                            {/*    <area shape="default" coords="" href={el.address2} alt=""/>*/}
                                            {/*</map>*/}
                                            <iframe
                                                src={el.address}
                                                width="455" height="344" frameBorder="0"></iframe>
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