import React from 'react';
import TradBg from './trad-bg/trad-bg';
import TradSection1 from './trad-section1/trad-section1';
import TradSection2 from './trad-section2/trad-section2';
import Newlink from '../../newLink/newLink';

const Tradition = () => {
    return (
        <div>
            <TradBg/>
            <TradSection1/>
            <TradSection2/>
            <Newlink/>
        </div>
    );
};

export default Tradition;