import React from 'react';
import {NavLink}   from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/detailed")
    }
    return (
        <div id='hero'>
        <div className='container'>
            <div className='hero'>
                <div className='hero-texts'>
                    <h1>Welcome <br/>to Kyrgyzstan!</h1>
                    <p>Kyrgyzstan is a real pearl of Central Asia <br/> and one of the most beautiful original <br/> countries.</p>
                <button onClick={handleClick}>More detailed</button>
                   
                  
                </div>
                <div className='hero--blocks'>
                    <div className='hero--blocks__block'>
                        <div className='hero-block-container'>
                            <h4 className='hero-title'>Kyrgyzstan</h4>
                            <div className='hero--block__line'></div>
                            <p className='hero-about'>Kyrgyzstan is a country in  Central Asia, rich in incredible natural landscapes that form the peaks of the Pamir  Mountains, Lake Issyk-Kul and the Tien Shan ridges.</p>
                            
                        </div>
                        <NavLink to={'/pages'} className='hero-block-read'><p>Read more</p></NavLink>
                    </div>
                    <div className='hero--blocks__block'>
                        <div className='hero-block-container'>
                            <h4 className='hero-title'>Culture</h4>
                            <div className='hero--block__line'></div>
                            <p className='hero-about'>The culture of Kyrgyzstan was formed under the strong influence of nomadic life. In addition, it was influenced by the cultures of Russia, Persia and Turkey, and yet it ...</p>
                            
                        </div>
                        <NavLink to={'/page'} className='hero-block-read'><p>Read more</p></NavLink>
                    </div>
                    <div className='hero--blocks__block'>
                        <div className='hero-block-container'>
                            <h4 className='hero-title'>Tradition</h4>
                            <div className='hero--block__line'></div>
                            <p className='hero-about'>The most traditional custom among the Kyrgyz  - like all peoples - is hospitality. Every guest was honored. Traditions of respect for elders are also important. In a Kyrgyz ...</p>
                            
                        </div>
                        <NavLink to={'/pagee'} className='hero-block-read'><p>Read more</p></NavLink>
                    </div>
                    <div className='hero--blocks__block'>
                        <div className='hero-block-container'>
                            <h4 className='hero-title'>Climate</h4>
                            <div className='hero--block__line'></div>
                            <p className='hero-about'>The climate of Kyrgyzstan is continental because Kyrgyzstan is located far from the oceans. While summers can be quite hot in the cities, the mountains are comparatively cool even ...</p>
                            
                        </div>
                        <NavLink to={'/pages/welcome'} className='hero-block-read'><p>Read more</p></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Hero;