import React, { useState } from 'react';
import { WhoamI } from './components/whoami/WhoamI'
// import { Resumee } from './components/resumee'
import { Projects } from './components/projects/Projects'
import { Home } from './components/home/Home'
import { Navbar } from './components/navbar/Navbar'
import { MyWeekend } from './components/myWeekend/MyWeekend'
import {Footer} from './components/footer/Footer'
import { Timeline } from './components/experience/Experience'


import {
    HashRouter,
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";

//   import { Switch } from "react-router";

import './App.scss';


function App() {
   
    return (
        <div className="App">
            <div className="main-container">
     
                 <HashRouter >  
                            <Navbar />
                 <Routes>
                        <Route path='/' element={<Home />}/> 
                        <Route exact path='/whoami' element={<WhoamI />}/> 
                        <Route path='/projects' element={<Projects />}/> 
                        <Route path='/myweekend' element={<MyWeekend />}/> 
                        <Route path='/so-far' element={<Timeline />}/> 
                    </Routes>
                </HashRouter>
            <Footer />
            {/* {isFullScreen ? <button className="button" onClick={() => { closeFullScreen() }}>CTRL + C </button> : <button  className="button" onClick={() => { openFullScreen() }}>npm start</button>} */}
            </div>
        </div>
    );
}

export default App;
