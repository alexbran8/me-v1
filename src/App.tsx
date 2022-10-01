import React, { useState } from 'react';
import { WhoamI } from './components/whoami'
import { Resumee } from './components/resumee'
import { Projects } from './components/projects'
import { Home } from './components/Home'
import { Navbar } from './components/navbar/Navbar'
import {Footer} from './components/footer/Footer'
// import logo from './logo.svg';



import {
    HashRouter,
    Route,
  } from "react-router-dom";

  import { Switch } from "react-router";

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
            <div className="main-container">
           <Navbar />
                 <HashRouter >  
                      
                 <Switch>
                        <Route path='/'><Home /></Route> 
                        <Route path='/whoami'><WhoamI /></Route> 
                        <Route path='/latest-projects'><WhoamI /></Route> 
                        {/* <Route exact={true} path='/' component={Notes} />
                        <Route exact={true} path='/About' component={About} /> */}
                    </Switch>
                </HashRouter>
            <Footer />
            {/* {isFullScreen ? <button className="button" onClick={() => { closeFullScreen() }}>CTRL + C </button> : <button  className="button" onClick={() => { openFullScreen() }}>npm start</button>} */}
            </div>
        </div>
    );
}

export default App;
