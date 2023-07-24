import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MdKeyboardArrowRight} from "react-icons/md";
import {NavLink} from "react-router-dom";
import {getPopular} from "../../store/reducer/reducer";
import {Places} from "../../back-end/backend";

const Popular = () => {
    const popular = useSelector(state => state.travel.popular)

    const dispatch = useDispatch()
    const [hover, setHover] = useState(null)
    const Popular = () => dispatch(getPopular(Places))

    useEffect(() => {
        Popular()
    }, [])
    const handleMouseOver = (el) => {
        setHover(el)
    }
    const handleMouseOut = () => {
        setHover(null)
    }
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    <h1>POPULAR SIGHTS OF KYRGYZSTAN</h1>
                    <div className='popular--cards'>
                        {popular.map((el) => {
                            const isHover = hover === el.id
                            return (
                                <div className='popular--cards__card' key={el.id}
                                     onMouseOver={() => handleMouseOver(el.id)}
                                     onMouseOut={handleMouseOut}
                                >
                                    <img src={el.img} alt=""/>
                                    <div className='popular--cards__card--hover' style={
                                        {
                                            display: isHover ? "block" : "none"
                                        }
                                    }>
                                        <h4>{el.title}</h4>
                                        <p className='p1'>{el.description}</p>
                                        <NavLink to={`/popular/${el.id}`} className='popular--cards__card--hover__icon'>
                                            <p className='p2'>read more</p>
                                            <MdKeyboardArrowRight className='popular--cards__card--hover__icon--arrow'/>
                                        </NavLink>

                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;