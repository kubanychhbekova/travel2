import React from 'react';
import Detailed from './detail/detail';

import AboutKgPictures from './about-kg-pictures/about-kg-pictures';
import AboutMap from './about-map/about-map';
import AboutKg from './about-kg/about-kg';
import Newlink from '../newLink/newLink';
const Details = () => {
    return (
        <div>
            <Detailed/>
            <AboutKg/>
            <AboutKgPictures/>
            <AboutMap/>
            <Newlink/>
        </div>
    )
};

export default Details;