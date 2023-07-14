
import './App.css';
import Header from './components/header/Header'
import Main from'./components/main/Main'
import { HooksClick } from './components/hooks/hooks.js'
import React, { useState } from "react";

function App() {

  const [ activeStep, setActiveStep ] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    
    { label: 'que1' },
    { label: 'que2' },
    { label: 'que3'},
    { label: 'que4' },
    { label: 'que5' },
    { label: 'que6' },
    
    
  ];

  const progData = [
    { prog: 0, circles: [{ status: "+" }] },
    { prog: 20, circles: [{ status: "✔" }, { status: "+" }] },
    { prog: 40, circles: [{ status: "✔" }, { status: "✔" }, { status: "+" }] },
    { prog: 60, circles: [{ status: "✔" }, { status: "✔" }, { status: "✔" }, { status: "+" }] },
    { prog: 80, circles: [{ status: "✔" }, { status: "✔" }, { status: "✔" }, { status: "✔" }, { status: "+" }] },
    { prog: 100, circles: [{ status: "✔" }, { status: "✔" }, { status: "✔" }, { status: "✔" }, { status: "✔" }, { status: "✔" }] }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonClicks, setButtonClicks] = useState(0);

  
  const currentProgData = progData[currentIndex];
  const progClass = `prog${buttonClicks}`;
 
  
  return (
    <HooksClick.Provider value={ [activeStep, setActiveStep, progress, setProgress, steps, currentIndex, setCurrentIndex, buttonClicks, setButtonClicks, progData ] }>
      <div className='container'>
        <Header/>
        <Main />
      </div>
    </HooksClick.Provider>
    )

}

export default App;
