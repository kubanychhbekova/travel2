import React from 'react';
import HotelSearch from "./search/hotelSearch";
import Hotel from "./hotel/hotel";

const Hotels = () => {
    return (
        <div>
            <Hotel/>
            <HotelSearch/>

        </div>
    );
};

export default Hotels;