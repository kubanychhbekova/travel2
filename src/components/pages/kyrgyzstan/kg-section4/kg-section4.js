import React from 'react';
import kgSection4Pic1 from '../../../../assets/img/kg-section4-pic1.png';
import kgSection4Pic2 from '../../../../assets/img/kg-section4-pic2.png';
import kgSection4Pic3 from '../../../../assets/img/kg-section4-pic3.png';
import kgSection4Pic4 from '../../../../assets/img/kg-section4-pic4.png';
import kgSection4Pic5 from '../../../../assets/img/kg-section4-pic5.png';
import kgSection4Pic6 from '../../../../assets/img/kg-section4-pic6.png';
import kgSection4Pic7 from '../../../../assets/img/kg-section4-pic7.png';


const KgSection4 = () => {
    return (
        <div id='kg-section4'>
            <div className='container'>
                <div className='kg-section4'>
                    <div className='picture-first'>
                        <img src={kgSection4Pic1} alt=''/>
                        <img src={kgSection4Pic2} alt=''/>
                        <img src={kgSection4Pic3} alt=''/>
                        <img src={kgSection4Pic4} alt=''/>
                    </div>
                    <div className='picture-little'>
                        <div className='picture-second'>
                            <img src={kgSection4Pic5} alt=''/>
                            <img src={kgSection4Pic6} alt=''/>
                        </div>
                        <div className='big'>
                            <img src={kgSection4Pic7} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KgSection4;