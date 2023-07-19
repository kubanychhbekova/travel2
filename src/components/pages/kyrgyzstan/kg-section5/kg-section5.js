import React from 'react';
import kgSection1 from '../../../../assets/img/kg-section5-pic1.png';
import kgSection2 from '../../../../assets/img/kg-section5-pic2.png';
import kgSection3 from '../../../../assets/img/kg-section5-pic3.png';
import kgSection4 from '../../../../assets/img/kg-section5-pic4.png';


const KgSection5 = () => {
    return (
        <div id='kg-section5'>
            <div className='container'>
                <div className='kg-section5'>
                    <div className='section5-pictures'>
                        <img src={kgSection1} alt=''/>
                        <img src={kgSection2} alt=''/>
                        <img src={kgSection3} alt=''/>
                        <img src={kgSection4} alt=''/>
                    </div>
                    <p>
                        <b>The capital</b> is the city of Bishkek with a population of 874.4 thousand people,<br/> previously the city also bore the names Pishpek and Frunze. Thanks to the<br/> orthogonal type of layout, it is wonderfully blown by air from the mountains. The<br/> constant influx of fresh air distinguishes it favorably from the number of similar<br/> large cities in the region.<br/>
                        <b>The official language is Kyrgyz,</b> but there are many people in the country who<br/> speak Uzbek and Tajik. As the main language of international communication,<br/> Russian acts, which has the status of an official one.<br/>
                        The monetary unit is som. On the territory of Kyrgyzstan, all calculations are<br/> made in som (1 som = 100 tyyn). Banks and currency exchange offices can be<br/> found in all major cities of the Republic.<br/>
                        <b>Religions.</b> The population reaches spiritual wealth by professing Islam in 75%<br/> and Orthodoxy in 20%. Other religions account for only 5% of citizens.<br/>
                        Standard time zone: UTC/GMT +5 hours. The time in the country is not divided<br/> into winter and summer and is consistently equal to +5 hours to GMT.<br/>
                        <b>Electricity.</b> As in many other CIS countries, in Kyrgyzstan the voltage in the<br/> power grid is 220 V with a current frequency of 50 Hz. Sockets are mainly used<br/> standard, with a double plug. However, in some hotels you can also meet with a<br/> triple.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KgSection5;