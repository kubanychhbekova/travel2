import React from 'react';
import ist from "../../assets/img/instag.svg"
import face from "../../assets/img/face.svg"
import twit from "../../assets/img/twit.svg"
import tel from "../../assets/img/tel.svg"
import wts from "../../assets/img/wts.svg"

const Ourlink = () => {
    return (
        <div className="link">
            <h2>Did you like the article? Share the page!</h2>
            <div className='imgs'>
                <img src={ist} alt=""/>
                <img src={face} alt=""/>
                <img src={twit} alt=""/>
                <img src={tel} alt=""/>
                <img src={wts} alt=""/>
            </div>

        </div>
    );
};

export default Ourlink;