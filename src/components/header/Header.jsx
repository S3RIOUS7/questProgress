
import React, { useState } from "react";
import "../header/header.scss"

import { HooksClick } from '../../components/hooks/hooks'


function Header (){

  const [activeStep, setActiveStep, progress, setProgress, steps, currentIndex, setCurrentIndex, buttonClicks, setButtonClicks, progData] =  React.useContext(HooksClick)

  

  const currentProgData = progData[currentIndex];
  const progClass = `prog${buttonClicks}`;

  return (
    <div className="stepper-container">
     
     <div className="progressContainer">
     <div className={progClass}>
         
          {currentProgData.circles.map((circle, index) => (
            <div key={index} className="circle">{circle.status}</div>
          ))}
      </div>
      </div>
        
        { activeStep !== steps.length 
          &&  (
          <div className="progressBar">
          <progress value={progress} max="80"/>
          </div>
           )}


    </div>
  );
    
}
export default Header