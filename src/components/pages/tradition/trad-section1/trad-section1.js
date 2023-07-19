import React from 'react';
import tradSection1Pic1 from '../../../../assets/img/trad-section1-pic1.png';
import tradSection1Pic2 from '../../../../assets/img/trad-section1-pic2.png';
import tradSection1Pic3 from '../../../../assets/img/trad-section1-pic3.png';
import tradSection1Pic4 from '../../../../assets/img/trad-section1-pic4.png';
import tradSection1Pic5 from '../../../../assets/img/trad-section1-pic5.png';

const TradSection1 = () => {
    return (
        <div id='trad-section1'>
            <div className='container'>
                <div className='trad-section1'>
                    <div className='traditionss'>
                    <p>
                    <b>Traditions related to the birth of a child</b><br/>
                    According to Kyrgyz traditions, after the birth of a child, one holiday was replaced by another. To the one who first informs the joyful news of the birth of the baby - "suyunchu" - relatives had to make a small monetary gift, another reward - "korunduk" - was awarded for the right to see the baby.<br/>
                    <br/>
                    Choosing the name of a newborn is also a whole ritual. According to custom, the woman did not give the child a name herself. This mission was assigned to the most respected person in the environment or to the oldest in the family.<br/>
                    <br/>
                    The main traditions that every Kyrgyz should remember<br/>
                    <br/>
                    After a while, in honor of the birth of the child, a celebration was organized "beshik toy" or a modest one surrounded by the closest ones - "zhentek".<br/>
                    <br/>
                    When the baby began to take the first steps, the circumcision ceremony of the put "tushoo kesu" was performed, and after a few years, if it was a boy, circumcision was performed and "sunnot toy" was performed.<br/>
                    <br/>
                    The 12th anniversary of the child - "muhol zhash" - was celebrated in a special way, in a more solemn atmosphere. It was believed that he had lived his first cycle, so relatives gave him their blessing, and among the gifts there had to be a red handkerchief or shirt. The red color meant that the teenager was preparing for adulthood.<br/>
                    <br/>
                    Throughout life, every 12-year cycle, which is 24 years, 36, 48 years and beyond, was celebrated in a special way. It was believed that this age is fatal and carries a lot of trials. When a person crossed this line, they continued to give him red clothes for his birthday, and he had to give some old things to others.
                    </p>
                    <img src={tradSection1Pic1} alt=''/>
                    </div>
                    <div className='trad-section1-pictures'>
                    <img src={tradSection1Pic2} alt=''/>
                    <img src={tradSection1Pic3} alt=''/>
                    <img src={tradSection1Pic4} alt=''/>
                    <img src={tradSection1Pic5} alt=''/>
                    <img src={tradSection1Pic2} alt=''/>
                    <img src={tradSection1Pic3} alt=''/>
                    <img src={tradSection1Pic4} alt=''/>
                    <img src={tradSection1Pic5} alt=''/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TradSection1;