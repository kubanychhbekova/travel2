import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Review = () => {
const review=useSelector(s=>s.review)
    const dispatch=useDispatch()
    const addReview=()=>{
    let review=JSON.parse(localStorage.getItem("review")) || []

    }
    useEffect(()=>{
        dispatch({type:"ADD_REVIEW"})
    })
    return (
        <div id="review">
            <div className="slider">

            </div>
            <div className="container">
                <div className="review">

                </div>
            </div>
        </div>
    );
};

export default Review;