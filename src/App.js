
import './App.css';
import Header from './components/header/Header'
import Main from'./components/main/Main'
import { HooksClick } from './components/hooks/hooks.js'
import React, { useState } from "react";

function App() {

  const [ activeStep, setActiveStep ] = useState(0);

 
 
  
  return (
    <HooksClick.Provider value={ [activeStep, setActiveStep] }>
        <div className='container'>
        <Header/>
        <Main />
        </div>
        
    </HooksClick.Provider>
    )

}

export default App;
