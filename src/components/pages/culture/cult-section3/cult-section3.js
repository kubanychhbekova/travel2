import React from 'react';
import cultSection3pic1 from '../../../../assets/img/cult-section1-pic1.png';
import cultSection3pic2 from '../../../../assets/img/cult-section3-pic1.png';
import cultSection3pic3 from '../../../../assets/img/cult-section3-pic2.png';
import cultSection3pic4 from '../../../../assets/img/cult-section3-pic3.png';
import cultSection3pic5 from '../../../../assets/img/cult-section3-pic4.png';

const CultSection3 = () => {
    return (
        <div id='cult-section3'>
            <div className='container'>
                <div className='cult-section3'>
                    <div className='cult-section3-clothes'>
                        <p>
                            <b>Clothes</b><br/>
                            Kyrgyz clothing was also adapted to the living conditions caused by the type of activity. It was a calico or calico shirt, loose trousers with a drawstring. Over the shirt was worn a doublet, sewn close-fitting, in cold weather, over which a robe on cotton wool or homespun cloth was worn. Kyrgyz winter clothes are sheepskin sheepskin coats and trousers made of sheep's wool with fur inside. Kyrgyz shoes are boots with soft soles without heels. The summer headdress of the Kyrgyz is a cap made of thin, white felt with lapels made of black velvet. The winter headdress was a hat with earflaps made of sheep skins.<br/>
                            <br/>
                            Traditional women's clothing consisted of a long white shirt, which simultaneously served as a dress and long trousers, which were worn under the dress. A sleeveless jacket or doublet was worn over the dress. Girls and young women have sleeveless jackets and camisoles made of colored velvet. The clothes of married women also consisted of a kind of skirt with a wide belt and bright embroidery, which was sewn from sheep skins, the fur is located inside. They were worn in the cold season. On the head of a married woman, you can see a headdress-a turban made of fine muslin, the girls wore round caps trimmed with fluffy fur and decorated with owl feathers. Modern Kyrgyz clothing is common. This is a business suit for everyday work, sportswear, sneakers, light dresses made of cotton and silk - women's outfit.
                        </p>
                        <img src={cultSection3pic1} alt=''/>
                    </div>
                    <div className='cult-section3-pictures'>

                        <img src={cultSection3pic2} alt=''/>
                        <img src={cultSection3pic3} alt=''/>
                        <img src={cultSection3pic4} alt=''/>
                        <img src={cultSection3pic5} alt=''/>
                        <img src={cultSection3pic2} alt=''/>
                        <img src={cultSection3pic3} alt=''/>
                        <img src={cultSection3pic4} alt=''/>
                        <img src={cultSection3pic5} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CultSection3;