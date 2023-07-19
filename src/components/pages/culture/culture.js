import React from 'react';
// import Culture from './culture-bg/culture-bg';
import CultSection1 from './cult-section1/cult-section1';
import CultSection2 from './cult-section2/cult-section2';
import CultSection3 from './cult-section3/cult-section3';
import CultSection4 from './cult-section4/cult-section4';
import CultureBg from './culture-bg/culture-bg';

const Culture = () => {
    return (
        <div>
            <CultureBg/>
            <CultSection1/>
            <CultSection2/>
            <CultSection3/>
            <CultSection4/>
        </div>
    );
};

export default Culture;