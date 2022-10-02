import React from 'react'
import landingPagePic from './../../static/last-sunday.jpg';

import "./LastSunday.css"


export const LastSunday = () => {

    return (
        <>
            <article>
                <div className="image-container">
            <div className='mid-left'>What did I do past weekend?</div>
       
                            <img className="img-responsive img-big" src={landingPagePic} alt="alexandru bran" />
                            </div>
                      
            </article>
        </>
    )
}