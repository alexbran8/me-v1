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
                        {/* {/* <Route exact={true} path='/' component={Notes} /> */}
                        {/* <Route exact={true} path='/About' component={About} />  */}
                    </Routes>
                </HashRouter>
            <Footer />
            {/* {isFullScreen ? <button className="button" onClick={() => { closeFullScreen() }}>CTRL + C </button> : <button  className="button" onClick={() => { openFullScreen() }}>npm start</button>} */}
            </div>
        </div>
    );
}

export default App;
