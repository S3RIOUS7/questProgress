import { Stepper } from 'react-form-stepper';
import React, { useState } from "react";
import "../header/header.scss"

import { HooksClick } from '../../components/hooks/hooks'


function Header (){

  const [activeStep, setActiveStep, progress, setProgress, steps, handleNext] =  React.useContext(HooksClick)



  return (
    <div className="stepper-container">
     
     <div className="progress-container">
       <div className="circle">+</div>
      
     </div>

        { activeStep !== steps.length 
          &&  (
          <div className="progressBar">
          <progress value={progress} max="80"/>
          </div>
           )
        }
      
    </div>
  );
 
}
export default Header