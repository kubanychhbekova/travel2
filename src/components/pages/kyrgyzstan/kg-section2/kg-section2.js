import React from 'react';
import kgSection2Pic1 from '../../../../assets/img/kg-section2-pic1.png'
import kgSection2Pic2 from '../../../../assets/img/kg-section2-pic2.png'
import kgSection2Pic3 from '../../../../assets/img/kg-section2-pic3.png'


const KgSection2 = () => {
    return (
        <div id='kg-section2'>
            <div className='container'>
                <div className='kg-section2'>
                    <div className='kg-section2-pictures'>
                        <img src={kgSection2Pic1} alt=''/>
                        <img src={kgSection2Pic2} alt=''/>
                        <img src={kgSection2Pic3} alt=''/>
                    </div>
                    <p>
                    <b>Kyrgyzstan</b> is a real "mountain paradise" nestled between the deserts of<br/> Uzbekistan, the steppes of Kazakhstan, the harsh highlands of Tajikistan and the<br/> sparsely populated, arid plains of Western China (Xinjiang). Two of the greatest<br/> mountain systems of the Earth - Tien Shan and Pamir - stretch across the entire<br/> territory of Kyrgyzstan with the highest peaks of the world level - Victory Peak<br/> (7439 m), Lenin Peak (7134 m) and the most beautiful pyramidal peak Khan<br/> Tengri (6995 m). Climbers, rock climbers, skiers, snowboarders, lovers of<br/> mountain hiking (trekking, hiking) and other extreme people go to the most<br/> beautiful mountainous regions of Kyrgyzstan both in winter and in summer.<br/>
                    <br/>
                    Due to its majestic mountains and temperate continental climate, Kyrgyzstan is<br/> considered to be the land of the largest glaciers on the planet, huge snowfields,<br/> rapid mountain rivers, turquoise alpine lakes, enchanting alpine meadows with<br/> different grasses and colors and fertile valleys rich in a variety of flora and<br/> fauna.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KgSection2;