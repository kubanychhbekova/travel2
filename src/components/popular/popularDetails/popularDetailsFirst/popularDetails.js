import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Places} from "../../../../back-end/backend";
import sonKulBg4 from "../../../../assets/img/sonKul4.png";
import Newlink from "../../../newLink/newLink";


const PopularDetails = ({cards}) => {

        return (
            <div>
                {cards.map((el) => {
                    return (
                        <div id="popularDetail">
                            <div className="container">
                                <div className="popularDetail">
                                    <div className='popularDetail--first'>
                                        <p>{el.detailDesc}</p>
                                    </div>
                                    <img src={el.bgImg2} alt=""/>
                                    <div className='popularDetail--second'>
                                        <h2>Tourisim</h2>
                                        <p>{el.tourism}</p>
                                    </div>
                                    <img src={el.tourismImg} alt=""/>
                                    <div className="popularDetail--text">
                                        <p>{el.tourism2}</p>
                                        <h2>Climate</h2>
                                        <p>{el.climate}</p>
                                    </div>
                                    <div className='popularDetail--third'>
                                        <div>
                                            <h2>Inhabitants of the Tien Shan Son Kul</h2>
                                            <p>{el.inhabitants}</p>
                                        </div>
                                        <img src={el.bgImg4} alt=""/>
                                        <div>
                                            <h2>Inhabitants of the Tien Shan Son Kul</h2>
                                            <p>{el.inhabitants2}</p>

                                        </div>
                                    </div>
                                    <div className='popularDetail--fourth'>
                                        <center><h2>Photo gallery</h2></center>
                                        <img src={el.photo} alt=""/>

                                    </div>


                                </div>

                            </div>
                            <div className="popularDetail--photos">
                                {
                                    el.photos.map((elem) => {
                                        return (
                                            <>
                                                <img src={elem} alt=""/></>
                                        )
                                    })
                                }
                            </div>


                        </div>
                    )
                })}
                <div className='linkDel'>
                    <Newlink/>
                </div>

            </div>
        );
    }
;

export default PopularDetails;