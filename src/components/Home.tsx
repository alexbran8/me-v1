import React from "react";
import landingPagePic from './../profile_photo.jpg';
export const Home = () => {

    return (
        <div className='App-header'>

                <h1>hello, I am Alexandru</h1>
                <img src={landingPagePic} className="profile-logo" alt="profile-logo" />
                {/* <ProfilePic /> */}
                <h2>[ passionate fullstack developer ]</h2>
                {/* <h2>JavaScript - react.JS - next.JS</h2> */}
                
            </div>
    )
}