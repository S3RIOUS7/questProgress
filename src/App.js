
import './App.css';
import Header from './components/header/Header'
import Main from'./components/main/Main'
import { HooksClick } from './components/hooks/hooks.js'
import React, { useState } from "react";

function App() {

  const [ activeStep, setActiveStep ] = useState(0);
  


  const steps = [
    
    { label: 'que1' },
    { label: 'que2' },
    { label: 'que3'},
    { label: 'que4' },
    { label: 'que5' },
    { label: 'que6' },
    
    
  ];

 
 
  
  return (
    <HooksClick.Provider value={ [activeStep, setActiveStep, steps ] }>
      <div className='container'>
        <Header/>
        <Main />
      </div>
    </HooksClick.Provider>
    )

}

export default App;
