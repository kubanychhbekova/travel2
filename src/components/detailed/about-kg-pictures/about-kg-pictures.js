import React from 'react';
import aboutKgPicture1 from '../../../assets/img/aboutKg2.png';
import aboutKgPicture2 from '../../../assets/img/aboutKg3.png';
import aboutKgPicture3 from '../../../assets/img/aboutKg4.png';
import aboutKgPicture4 from '../../../assets/img/aboutKg5.png';


const AboutKgPictures = () => {
    return (
        <div id='about-kg-pictures'>
            <div className='container'>
                <div className='about-kg-pictures'>
                    <img src={aboutKgPicture1} alt=''/>
                    <div className='about-scrollbar'>
                        <img src={aboutKgPicture2} alt=''/>
                        <img src={aboutKgPicture3} alt=''/>
                        <img src={aboutKgPicture4} alt=''/>
                        <img src={aboutKgPicture2} alt=''/>
                        <img src={aboutKgPicture3} alt=''/>
                        <img src={aboutKgPicture4} alt=''/>
                        <img src={aboutKgPicture2} alt=''/>
                        <img src={aboutKgPicture3} alt=''/>
                        <img src={aboutKgPicture4} alt=''/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default AboutKgPictures;