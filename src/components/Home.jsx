import React from "react";
import landingPagePic from './../static/profile_photo.jpg';
import "./Home2.scss"

export const Home = () => {

    return (
        <div className='App-header'>

                
        <div className="typed-out"><h1>hello, I am Alexandru</h1></div>
                <img src={landingPagePic} className="profile-logo" alt="profile-logo" />
                <h2>[fullstack developer]</h2>
                {/* <h2>JavaScript - react.JS - next.JS</h2> */}
                
            </div>
    )
}