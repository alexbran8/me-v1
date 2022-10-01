import React from 'react'
import landingPagePic from './../static/coverPhoto.jpg';

import "./whoami.css"


export const WhoamI = () => {

    return (
        <>
            <article>
                <div className="flex-body">
                    <div className="flex-row">
                        <div>
                            <img className="img-circle img-responsive img-bordered-primary profile-photo" src={landingPagePic} alt="alexandru bran" />
                            <div className="text-capitalize">Alexandru Bran</div>
                            <div className="text-muted">full stack developer @ Huafe Group</div>
                            <div className="text-muted">cyclist @ 669seiseinoveTEAM</div>
                            <div>JavaScript enthusiast. Passionate about web development and modern technologies. Eager on knowledge sharing and community development. I find interesting doing same thing in different ways...</div>
                        <p>What do I do when I don't write code?</p>
                        </div>
                    </div>
                    <div className="flex-column">
                        
                    </div>
                </div>
            </article>
        </>
    )
}