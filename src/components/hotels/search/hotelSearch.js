import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {hotels} from "../../../back-end/backend";
import {regions} from "../../../back-end/backend";
import {NavLink} from "react-router-dom";

const HotelSearch = () => {
    const {product} = useSelector(s => s)
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [modal1, setModal1] = useState(false)
    const [region, setRegion] = useState("Where to?")
    const [city, setCity] = useState("Cities and Districts")
    const [activeElement, setActiveElement] = useState(null);

    useEffect(() => {
        dispatch({type: "GET_PRODUCT", payload: hotels})
    }, [])
    let found = regions.find(el => el.region === region)
    const handleMouseOver = (el) => {
        setActiveElement(el);
    };

    const handleMouseOut = () => {
        setActiveElement(null);
    };

    return (
        <div id="hotelSearch">
            <div className="container">
                <div className="hotelSearch">
                    <div className="hotelSearch--top">
                        <div className="hotelSearch--top__region">
                            <div className="hotelSearch--top__region--first" onClick={() => {
                                setModal(!modal)
                            }}
                                 style={{background: modal ? " #D9D9D9" : ""}}>
                                <h6 style={{
                                    marginTop: region !== "Where to?" ? "12px" : ""
                                }}>{region}</h6>
                                <p style={{
                                    display: region !== "Where to?" ? "none" : ""
                                }}>City,area,landmark,property</p>
                            </div>
                            <div className="hotelSearch--top__region--second" style={{
                                display: modal ? "block" : "none",

                            }}>
                                <div className="hotelSearch--top__region--second__div">
                                    {
                                        regions.map((el) => {
                                            return (
                                                <div key={el.id}>
                                                    <h5 onClick={(e) => {
                                                        setRegion(e.target.innerText)
                                                        setModal(!modal)

                                                    }}>{el.region}</h5>

                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="hotelSearch--top__district">
                            <div className="hotelSearch--top__district--first" onClick={() => {
                                setModal1(!modal1)
                            }}
                                 style={{background: modal1 ? " #D9D9D9" : ""}}>
                                <h6>{city}</h6>

                            </div>
                            <div className="hotelSearch--top__district--second" style={{
                                display: modal1 ? "block" : "none"
                            }}>
                                <div className="hotelSearch--top__district--second__div">
                                    {
                                        regions.map((el) => {
                                            if (el === found) {
                                                return (
                                                    <div key={el.id}>
                                                        {el.districts.map((elem) => {
                                                            return (
                                                                <div key={elem.id}>
                                                                    <h5 onClick={() => {
                                                                        setCity(`${elem.name}`)
                                                                        setModal1(!modal1)
                                                                    }}>{elem.name}</h5>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                )
                                            }


                                        })
                                    }
                                </div>
                            </div>

                        </div>
                        <div className="hotelSearch--top__btn">
                            <button>Search</button>
                        </div>
                    </div>
                    <div className="hotelSearch--bottom">
                        {product.slice(0,6).map((el) => {
                            const isActive = activeElement === el.id;

                            return (
                                <div
                                    key={el.id}
                                    className="hotelSearch--bottom__cards"
                                    onMouseOver={() => handleMouseOver(el.id)}
                                    onMouseOut={handleMouseOut}>
                                    <div className="hotelSearch--bottom__cards--card">
                                        <NavLink to={`/hotels/${el.id}`}>
                                            <img src={el.img} alt=""/>
                                        </NavLink>
                                    </div>
                                    <div className="hotelSearch--bottom__cards--modal"
                                         style={{
                                             display: isActive ? 'block' : 'none',

                                         }}>
                                        <div className="hotelSearch--bottom__cards--modal__top">
                                            <h2>{el.title}</h2>
                                            <p>⭐⭐⭐⭐⭐</p>
                                        </div>
                                        <p>{el.description1}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelSearch;