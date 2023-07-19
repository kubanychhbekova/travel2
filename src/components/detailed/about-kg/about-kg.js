import React from 'react';
import imgabout from '../../../assets/img/aboutKg1.png';

const AboutKg = () => {
    return (
        <div id='aboutKg'>
            <div className='container'>
                <div className='aboutKg'>
                    <div className='aboutKg-texts'>
                        <h4>Kyrgyzstan is a real pearl of Central Asia and one<br/> of the most beautiful and original countries in the <br/>world.</h4>
                        <p>Even now, despite its relative obscurity, thousands of tourists visit our country<br/> every year and everyone finds something special here. Some people are attracted<br/> to rest on Issyk-Kul, on its friendly and warm shores. Someone is attracted by the<br/> amazing nomadic culture and traditions that the people of Kyrgyzstan preserve to<br/> this day. The strongest in body and spirit are called the high mountains of the Tien<br/> Shan and Pamir, where lovers of hiking, mountaineers, cyclists, etc. test<br/> themselves for strength and enjoy untouched and wild nature.<br/>
                            The almost primeval beauty of nature has been preserved in Kyrgyzstan:<br/> mountains, rivers, lakes and valleys are sparsely populated and practically<br/> uninhabited by humans. Here you can feel like a real pioneer, discovering<br/> something new over and over again.<br/>
                            Choosing Kyrgyzstan as a place for rest and travel, you will certainly get a lot of<br/> new and vivid sensations. And the tourist guide to Kyrgyzstan Country Travel<br/> Guide will help you decide on the choice of direction in your travels</p>
                        <p className='aboutKg--texts__p'>On the pages of the guide, we have tried to collect the most complete and<br/> accurate information on the numerous natural and cultural beauties of the<br/> country, which will help you easily make a route for travel.</p>
                    </div>
                 <img src={imgabout} alt=""/>
            </div>
        </div>
    </div>
)
};

export default AboutKg;