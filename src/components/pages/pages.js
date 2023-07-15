import React from 'react';
import Hero from "../hero/hero";
import Popular from "../popular/popular";
import Review from "../reviews/review";

const Pages = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Review/>
        </div>
    );
};

export default Pages;