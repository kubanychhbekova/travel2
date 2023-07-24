import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {hotels} from "../../../back-end/backend";
import Hotel from "../hotel/hotel";
import HotelDetailPage from "./hotelDetailPage";
import {getHotels, getProduct} from "../../../store/reducer/reducer";


const HotelDetail = () => {
    const dispatch = useDispatch()
    const hotelsCard = useSelector(s => s.travel.hotelsCard)
    const product = useSelector(s => s.travel.product)
    const {id} = useParams();
    const Product = () => dispatch(getProduct(hotels))
    const Hotels = () => dispatch(getHotels(+id))
    useEffect(() => {
      Product()
       Hotels()
    }, [id])

    return (
        <div>
            <Hotel/>
            <HotelDetailPage cards={hotelsCard}/>
        </div>
    );
};

export default HotelDetail;