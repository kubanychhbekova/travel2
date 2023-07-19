import React from 'react';
import kgSectionPic1 from '../../../../assets/img/kg-section1-pic.png'

const KgSection1 = () => {
    return (
        <div id='kg-section1'>
            <div className='container'>
                <div className='kg-section1'>
                    <p><b>Kyrgyzstan</b> is a fabulous, fascinating and alluring Central Asian country with its<br/> natural beauties. Its tourism potential is huge! It is a dynamically developing<br/> republic with a rich history, unusual culture and many interesting traditions.<br/> Located at the intersection of the roads of the Great Silk Road, Kyrgyzstan still<br/> preserves unique ancient monuments, which, organically combined with <br/>modern buildings, are able to give a lot of unforgettable impressions to its<br/> guests. Sightseeing tours in Kyrgyzstan are very popular with curious tourists<br/> from near and far abroad.</p>
                    <img src={kgSectionPic1}alt=''/>
                </div>
            </div>
        </div>
    );
};

export default KgSection1;