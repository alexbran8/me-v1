import React from 'react'
import landingPagePic from './../../static/last-sunday.jpg';

import "./MyWeekend.css"


export const MyWeekend = () => {

    return (
        <>
            <article>
                <div className="image-container">
            {/* <div className='mid-left'>What did I do past */}
       
                            <img className="img-responsive img-big" src={landingPagePic} alt="alexandru bran" />
                            </div>
                      
            </article>
        </>
    )
}