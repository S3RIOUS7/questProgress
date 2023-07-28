
import './App.css';
import Answers from './components/pages/answerFinal/Answers';
import Main from'./components/pages/main/Main'
import { HooksClick } from './components/hooks/hooks.js'
import React, { useState } from "react";

function App() {

  const [ activeStep, setActiveStep ] = useState(0);

 
 
  
  return (
    <HooksClick.Provider value={ [activeStep, setActiveStep] }>
        <div className='container'>
        <Main />
        <Answers />
        </div>
        
    </HooksClick.Provider>
    )

}

export default App;
