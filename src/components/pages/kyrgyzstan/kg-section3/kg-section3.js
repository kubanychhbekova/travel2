import React from 'react';
import kgSection3Pic1 from '../../../../assets/img/kg-section3-pic1.png';

const KgSection3 = () => {
    return (
        <div id='kg-section3'>
            <div className='container'>
                <div className='kg-section3'>
                    <div className='generalInfo'>
                        <h1>General information about Kyrgyzstan.</h1>
                        <div className='location-picture'>
                            <p>
                               <b>Location.</b><br/>
                               Located in the northeast of Central Asia, Kyrgyzstan can be confidently called<br/> Central Asian Switzerland, because these two countries have a lot in common.<br/> Like European Switzerland, the territory of Kyrgyzstan is more than half located in<br/> the mountains, and even its low-lying regions do not fall below 401 meters<br/> above sea level. Neither one nor the other state has an exit to the sea itself.<br/> Kyrgyzstan stretches from east to west along the Tien Shan and Pamir-Alai <br/>chains. The highest peak is Victory Peak (7439 m). In the mountains, everything <br/>breathes untouched, pristine beauty, which you will not see on the plains. The<br/> northern point of Kyrgyzstan is located at the same latitude as Rome, and the<br/> southern point is located with the island of Sicily.<br/>
                               <br/>
                               <b>Square.</b> If we compare the size, the Central Asian country of mountains is almost<br/> five times larger than Switzerland - its area is 199.9 thousand square kilometers.<br/> Portugal, Switzerland, Belgium and the Netherlands combined could fit here.
                            </p>
                            <img src={kgSection3Pic1} alt=''/>
                        </div>
                        <p>
                           <b>The population is people </b>(). More than half a million people live on these lands. Since life in the mountainous regions is quite difficult, most of the population is<br/> concentrated in the valleys of Talas, Naryn, Chuisk and Issyk-Kul basin. The national composition is heterogeneous, but for the most part representatives of different<br/> peoples live separately. For example, Uzbeks, who make up 14.3%, settled in the southwest of the country; Russians, represented by 7.8%, live mainly in the north; a <br/>small number of Germans live in the Talas region and the Kant city area; Dungans (Chinese Muslims) and Kazakhs - in the Chui Valley; Uighurs - in Bishkek, Osh<br/> and Jalal-Abad. Kyrgyz, of course, are an ethnic minority, live throughout the country and predominate in most rural areas.<br/>
                           <b>Political structure.</b> According to the Constitution, Kyrgyzstan is a parliamentary republic, that is, the president has fewer powers than the Prime Minister and<br/> Parliament. The people elect the President once every six years, after which he will no longer be able to run. 120 members of parliament are elected for five years on <br/> party lists, and the head of government, in turn, is determined by the parliament itself.<br/>
                           <b>Administrative-territorial division:</b> according to the administrative division, the country has 7 regions (Batken, Jalal-Abad, Issyk-Kul, Naryn, Osh, Talas and Chui),<br/> 40 districts, 22 cities and 429 rural administrations. The main cities are Bishkek and Osh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KgSection3;