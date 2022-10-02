import React from "react";
import landingPagePic from './../../static/profile_photo.jpg';
import "./Home2.scss"

export const Home = () => {

    return (
        <div className='App-header'>

                {/* TODO: fix padding of elements to make padding between h1 and h2 and picture responsive */}
        <div className="typed-out"><h1>hello, I'm Alexandru</h1></div>
        <div className="fade-in-image">
                <img src={landingPagePic} className="profile-logo" alt="profile-logo" />
                </div>
                <h2>[fullStackDeveloper]</h2>
                {/* <h2>JavaScript - react.JS - next.JS</h2> */}
            </div>
    )
}