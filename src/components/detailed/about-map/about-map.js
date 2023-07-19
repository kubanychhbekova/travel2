import React from 'react';
import aboutpic6 from '../../../assets/img/aboutKg6.png';
import whatsapp from '../../../assets/img/whatsapp.png'
const AboutMap = () => {
    return (
        <div id='about-map'>
            <div className='container'>
                <div className='about-map'>
                <p>A complete list of Kyrgyzstan's attractions — from the well-known Issyk-Kul Lake and the Ala-Archa Gorge, to the untouched and truly wild Tien Shan<br/> and Pamir Mountains. On the page with the place you are interested in, you can find all the necessary information to visit: the exact location with GPS<br/> coordinates, a relief map with the ability to zoom in and view all mountain paths and trails, information about roads and tourist infrastructure, as well<br/> as a detailed geographical and historical description.<br/>
                    Attractions are conveniently divided into categories. In the menu tab <b>"Where to go?"</b> you can find all the sights of the region of Kyrgyzstan you are<br/> interested in, or find a place you are interested in geographically, whether it is a lake, a mountain gorge or a cultural and historical place.<br/>
                    To make it more convenient for you, all the sights are available in the <b>"Map"</b> tab, where you can get directions via Google Maps.<br/>
                    In the <b>"What to do?"</b> tab you will be able to find exactly the places where you can take up your favorite type of active recreation: from extreme<br/> mountaineering and rafting to light hiking and traveling by car.<br/>
                    Also, announcements of interesting events and events for tourists are regularly published on the site: ethno-cultural festivals, World Nomad Games <br/>and much more.
                </p>
                    <img src={aboutpic6} alt=''/>

                </div>
            </div>
        </div>
    )
};

export default AboutMap;