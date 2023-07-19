import React from 'react';
import cultSection4Pic1 from '../../../../assets/img/cult-section4-pic1.png';
import cultSection4Pic2 from '../../../../assets/img/cult-section4-pic2.png';
import cultSection4Pic3 from '../../../../assets/img/cult-section4-pic3.png';


const CultSection4 = () => {
    return (
        <div id='cult-section4'>
            <div className='container'>
                <div className='cult-section4'>
                    <div className='cult-section'>
                        <p>
                            <b>Holidays</b><br/>
                            The social life of the Kyrgyz determined the nomadic way of life. The monotonous course of life on the nomads was disrupted by family holidays, in which all residents of the village took part. It was the birth of a boy, his circumcision, weddings, commemorations were accompanied by abundant treats.<br/>
                            <br/>
                            A big event in the village was the arrival of storytellers and musicians, whose performance attracted a lot of people. In winter, men's parties were arranged, komuz (stringed musical instrument) was played here, and various games were played. The most important issues for the Kyrgyz were solved by a council of elders, the people traditionally adopted different forms of mutual assistance, both kindred and neighborly.
                        </p>
                        <img src={cultSection4Pic1} alt=''/>
                    </div>
                    <div className='cult-section'>
                        <p>
                        <b>Rituals</b><br/>
                        Kyrgyz families are usually large, they lived together. The head of the family is the father, who managed all the property. The wife was deprived of the right to vote and did not own property. In the event of her husband's death, the children remained in the families of relatives. The widow used to be married off to the brother of the deceased. The funeral ceremony took place on the day of the death, the deceased was buried in a shroud, a mud-brick structure like a mausoleum was placed on the grave. Commemorations for the deceased were held on the third, seventh and fortieth day and a year after death. The wake did not cope with the woman.
                        </p>
                        <img src={cultSection4Pic2} alt=''/>
                    </div> 
                    <div className='cult-section'>
                        <p>
                        <b>Creation</b><br/>
                        Traditionally, the leading place in the oral folk art of the Kyrgyz is an epic genre, the pearl of which is the heroic epic trilogy "Manas", which tells about the exploits of the hero Manas, his son Semetey and grandson Seitek. The image of a Kyrgyz woman reflects the portrait of the beautiful Kanykey - Manas' wife, intelligent, insightful, beautiful. The epic depicts the life of the Kyrgyz, weddings, commemorations, celebrations, family life.
                        </p>
                        <img src={cultSection4Pic3} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CultSection4;