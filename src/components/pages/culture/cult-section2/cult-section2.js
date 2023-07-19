import React from 'react';
import cultSection2Pic1 from '../../../../assets/img/cult-section2-pic1.png';
import cultSection2Pic2 from '../../../../assets/img/cult-section2-pic2.png';
import cultSection2Pic3 from '../../../../assets/img/cult-section2-pic3.png';
import cultSection2Pic4 from '../../../../assets/img/cult-section2-pic4.png';


const CultSection2 = () => {
    return (
        <div id='cult-section2'>
            <div className='container'>
                <div className='cult-section2'>
                    <p>
                        <b>Dwellings</b><br/>
                        The nomadic lifestyle imposes its own conditions on a person's life. And this means that his housing should be adapted and comfortable for life. Therefore, the<br/> traditional dwelling of the Kyrgyz was a yurt, the basis of which was a wooden frame, located around the circumference, which ended with a domed tent. In the<br/> center of the tent there was a hole for the smoke to escape from the hearth, which in winter was bred for warmth in the yurt. The walls of the yurt were covered with<br/> mats made of chiya (hard grain), on top of which thick pieces of felt plates were superimposed. To the left of the entrance to the yurt was the male half, to which<br/> there are male household items: saddles, harness for horses, hunting items, etc. To the right of the entrance to the yurt was the female half. In the center of the yurt<br/> there was a hearth, behind which there were piles of blankets and chests on a wooden stand against the wall. Carpets are a special decoration of the yurt. The place<br/> behind the hearth is the most honorable. It was rightfully occupied by the owner of the house or the guest of honor. For the winter, Kyrgyz families gathered together,<br/> and in the spring they broke up into groups and went to roam with flocks of animals to high-altitude pastures.<br/>
                        <br/>
                        The dwellings of the Kyrgyz, who live sedentary and engaged in agriculture, were houses built of adobe bricks. The adobe brick was clay mixed with finely chopped<br/> grass dried in the sun. In Kyrgyz homes, as before, felt carpets, wall panels with embroidery, chests for storing things play an important role in the interior of the<br/> house. Traditionally, Kyrgyz people do a lot of work together. Near the Kirghiz's house there is a veranda, usually covered with grapes, fruit trees grow around the<br/> house, there are many flowers, cattle pens are located in the distance.<br/>
                        <br/>
                        The dwelling of the urban Kyrgyz is usually a sectional apartment, usually consisting of two, three, four rooms, cabinet furniture stands along the walls, carpets on<br/> the floor and on the walls in the middle of the room.
                    </p>
                    <div className='cult-section2-pictures'>
                        <img src={cultSection2Pic1} alt=''/>
                        <img src={cultSection2Pic2} alt=''/>
                        <img src={cultSection2Pic3} alt=''/>
                        <img src={cultSection2Pic4} alt=''/>
                        <img src={cultSection2Pic1} alt=''/>
                        <img src={cultSection2Pic2} alt=''/>
                        <img src={cultSection2Pic3} alt=''/>
                        <img src={cultSection2Pic4} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CultSection2;