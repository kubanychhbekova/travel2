import React from 'react';
import Mapmain from "../../assets/img/mapMainImg.png"


import Newlink from "../newLink/newLink";


const Map = () => {
    return (
        <div id='map'>

            <img className="mainImg" src={Mapmain} alt=""/>
<div className="container">
    <div className='mapImg'>
        <h1>Map of the sights of Kyrgyzstan</h1>
    </div>

    <div className="mainBlock">
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d62345.98749738601!2d74.70435277853214!3d42.85639029482827!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1677657783282!5m2!1sru!2skg"></iframe>
            <div className='mapText'>
                <h4>How to use the card?</h4>
                <p>To learn more about the place you are interested in, click on its icon. If you need more
                    information, at the end of each description there is a link to the attractions page on the
                    guidebook website.</p>
            </div>
        </div>

    </div>

</div>
            <Newlink/>
        </div>
    );
};

export default Map;