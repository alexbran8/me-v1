import React from 'react'
import landingPagePic from './../../static/coverPhoto.jpg';

import "./WhoamI.css"


export const WhoamI = () => {

    return (
        <>
            <article>
                <div className="flex-body">
                    <div className="flex-row">
                        <div>
                            <img className="img-circle img-responsive img-bordered-primary profile-photo" src={landingPagePic} alt="alexandru bran" />
                            <div className="text-capitalize">Alexandru Bran</div>
                            <div className="text-muted">fullStackDeveloper@Huafe</div>
                            <div className="text-muted">cyclist@669seiseinoveTEAM</div>
                            <div className="description-container">JavaScript enthusiast. Eager on knowledge sharing. I find interesting doing same thing in different ways...</div>
                        </div>
                    </div>
                    <div className="flex-column">
                        
                    </div>
                </div>
            </article>
        </>
    )
}