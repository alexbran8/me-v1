import React, { useState } from 'react';
import { WhoamI } from './components/whoami'
import { Resumee } from './components/resumee'
import { Projects } from './components/projects'
import { Technologies } from './components/technologies'
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
                <h2>JavaScript - react.JS - next.JS</h2>
                {isFullScreen ? <button onClick={() => { closeFullScreen() }}>CTRL + C </button> : <button onClick={() => { openFullScreen() }}>npm start</button>}
            </div>
            {isFullScreen ?
                <>
                    <WhoamI />
                    <Resumee />
                    <Technologies />
                    {/* <Projects />     */}
                </>
                : null}
        </div>
    );
}

export default App;
