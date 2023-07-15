import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useParams} from "react-router-dom";
import {Places} from "../../../back-end/backend";
import SecondPopularDetails from "./popularDetailsSecond/secondPopularDetails";
import PopularDetails from "./popularDetailsFirst/popularDetails";

const Detail = () => {
    const {cards} = useSelector(s => s)
    const {popular} = useSelector(s => s)
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
        dispatch({type: "GET_POPULAR", payload: Places})
        dispatch({type: "GET_CARDS", payload: +id})
    }, [id])
    return (
        <div>
            <SecondPopularDetails cards={cards}/>
            <PopularDetails cards={cards}/>
        </div>
    );
};

export default Detail;