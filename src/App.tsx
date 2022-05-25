import React, { useState } from 'react';
import {WhoamI} from './components/whoami'
import {Resumee} from './components/resumee'
import {Projects} from './components/projects'
// import logo from './logo.svg';
import landingPagePic from './pic1.jpg';


import microfrontends_puzzle from './microfrontends_puzzle.jpeg'
import monolithic_vs_microservice_architecture from './monolithic_vs_microservice_architecture.jpg'

import './App.scss';



function App() {
    const [isFullScreen, setIsFullScreen] = useState(false)

    function openFullScreen() {
        // Trigger fullscreen
        const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
            mozRequestFullScreen(): Promise<void>;
            webkitRequestFullscreen(): Promise<void>;
            msRequestFullscreen(): Promise<void>;
        };

        if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
            docElmWithBrowsersFullScreenFunctions.requestFullscreen();
        } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
            docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
        } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
        } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
            docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
        }
        setIsFullScreen(true);
    }

    function closeFullScreen() {
        const docWithBrowsersExitFunctions = document as Document & {
            mozCancelFullScreen(): Promise<void>;
            webkitExitFullscreen()
                : Promise<void>;
            msExitFullscreen(): Promise<void>;
        };
        if (docWithBrowsersExitFunctions.exitFullscreen) {
            docWithBrowsersExitFunctions.exitFullscreen();
        } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
            docWithBrowsersExitFunctions.mozCancelFullScreen();
        } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            docWithBrowsersExitFunctions.webkitExitFullscreen();
        } else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
            docWithBrowsersExitFunctions.msExitFullscreen();
        }
        setIsFullScreen(false);
    }
    return (
        <div className="App">
            <div className='App-header'>
                <h1>hello, I am Alexandru</h1>
                <img src={landingPagePic} className="profile-logo" alt="profile-logo" />
                {/* <ProfilePic /> */}
                <h2>[ passionate / creative web developer ]</h2>
                <h2>JavaScript - react - next</h2>
                {isFullScreen ? <button onClick={() => { closeFullScreen() }}>CTRL + C</button> : <button onClick={() => { openFullScreen() }}>npm start</button>}
            </div>
            {isFullScreen ?
                <>
                    <WhoamI/>
                    <Resumee />
                    {/* <Projects /> */}
                    {/* <article>
                        <h2>resumeee</h2>
                        <img className="img-big" src={monolithic_vs_microservice_architecture} alt="why microfrontends" />
                        <p className='description-container'>
                            Microfrontends are perhaps one of the most important industry trends in 2022. When the need to share components betweeen applications then this is perhaps one  of the most important concepts.
                            Performance of development is highly dependent on it.
                        </p>
                    </article>
                    <article>
                        <h2>past experience</h2>
                        <ul>
                            <li>2011-2012: civil engineering / site manager. During this period I have been responsible for supervising civil engineering construction works, safety of the site personel and engingeering </li>
                            <li>2012-2013: mechanical technician / engineer. I have started working in the OIL and GAS domain, as a mechanical technician, resposible for maintenance of field equipment (water pumps, crude oil wells, piping, etc.). I have been involved almost one year in studying advanced maintenance concepts (such as monitoring equipment based on frequency of vibrations). Later on I have started working as a project team member responsibile for reporting. </li>
                            <li>2014-2017: project manager. I have coordonated several projects managing all the project lifecycle phases. I have studied intesive PMI methodology.</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Top companies that use microservices implementation</h2>
                        <div className='dream-team-container'>
                            <div className='team-member-child'>
                                <img className="img-circle img-responsive img-bordered-primary" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS00Y8kE4WRVvh5CRHoWCivX3q5XMMvSsfIfQ&usqp=CAU'} />
                                <h6>Netflix</h6></div>
                            <div className='team-member-child'>
                                <img className="img-circle img-responsive img-bordered-primary" src={'https://www.ht4u.net/wp-content/uploads/2020/07/Spotify-Logo.jpg'} alt="david popa" />
                                <h6>Spotify</h6></div>
                            <div className='team-member-child'>
                                <img className="img-circle img-responsive img-bordered-primary" src={'https://play-lh.googleusercontent.com/qy_wZ92sFQccojEtscg52vtdAQmCIeQ4jsybMPmuML9Or7_SEOyrt0Jn0wyG-l2Fyw'} />
                                <h6>Uber</h6></div>
                            <div className='team-member-child'>
                                <img className="img-circle img-responsive img-bordered-primary" src={'https://play-lh.googleusercontent.com/31-mJUIynIfQBizOn-w1yWLKHBxVeRKA3gz348_E3K-TnuEaqCjn_-Fr9j0yQ6i0y5E'} alt="alexandru bran" />
                                <h6>Ebay</h6></div>
                        </div>
                    </article>
                    <article>
                        <h2>the dream team</h2>
                        <div className='dream-team-container'>
                            <div className='team-member-child'>
                                <img className="img-circle img-responsive img-bordered-primary" src={'https://blog.logrocket.com/wp-content/uploads/2018/08/complete-guide-default-props-react.jpeg'} />
                                <h6>Roxana</h6></div>

                        </div>
                    </article>
                    <article>
                        <h2>what will we learn?</h2>
                        <p className='description-container'>
                            <h6 className='attention'>Soon to be updated with learning materials. Stay tuned...</h6>
                        </p>
                    </article> */}
                </>
                : null}
        </div>
    );
}

export default App;
