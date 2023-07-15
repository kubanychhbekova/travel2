import React from 'react';

const SecondPopularDetails = ({cards}) => {
    return (
        <div>
            {
                cards.map((el)=>{
                    return(
                        <div id='secondPopularDetails'>
                            <img src={el.bgImg} alt=""/>
                            <div className='secondPopularDetails'>
                                <h1>{el.title}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SecondPopularDetails;