import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useParams} from "react-router-dom";
import { Places} from "../../../back-end/backend";
import SecondPopularDetails from "./popularDetailsSecond/secondPopularDetails";
import PopularDetails from "./popularDetailsFirst/popularDetails";
import {getCards, getPopular, getProduct} from "../../../store/reducer/reducer";

const Detail = () => {
    const cards = useSelector(s => s.travel.cards)
    const popular = useSelector(s => s.travel.popular)
    const dispatch = useDispatch()
    const {id} = useParams()
    const Popular = () => dispatch(getPopular(Places))
    const Cards = () => dispatch(getCards(+id))
    useEffect(() => {
       Popular()
        Cards()
    }, [id])
    return (
        <div>
            <SecondPopularDetails cards={cards}/>
            <PopularDetails cards={cards}/>
        </div>
    );
};

export default Detail;