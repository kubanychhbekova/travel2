import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {hotels} from "../../../back-end/backend";
import Hotel from "../hotel/hotel";
import HotelDetailPage from "./hotelDetailPage";
import Link from "../../link/link";

const HotelDetail = () => {
    const dispatch=useDispatch()
    const hotelsCard=useSelector(s=>s.hotelsCard)
    const product=useSelector(s=>s.product)

    const {id} = useParams();
    useEffect(() => {
        dispatch({type: "GET_PRODUCT", payload: hotels})

        dispatch({type: "GET_HOTELS", payload:   +id})

    }, [id])

    return (
        <div>
           <Hotel/>
            <HotelDetailPage cards={hotelsCard}/>

        </div>
    );
};

export default HotelDetail;