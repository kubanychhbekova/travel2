import React from 'react';
import cultSection1Pic1 from '../../../../assets/img/cult-section1-pic1.png'

const CultSection1 = () => {
    return (
        <div id='cult-section1'>
            <div className='container'>
                <div className='cult-section1'>
                    <p>
                       <b>Culture of Kyrgyzstan: ancient nomadic culture</b><br/>
                       The culture of Kyrgyzstan, i.e. how the people traditionally live, what has<br/> developed over the centuries in their lives, which allowed them to survive, is<br/> always of interest to researchers, travelers, tourists. That reasonable sufficiency,<br/> accumulated for centuries in the way of life of the people, their culture, self-<br/>expression, now attracts to the region of Central Asia
                    </p>
                    <img src={cultSection1Pic1} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default CultSection1;