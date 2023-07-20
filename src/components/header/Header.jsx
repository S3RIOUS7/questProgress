
import React, { useState } from "react";
import "../header/header.scss"

import { HooksClick } from '../../components/hooks/hooks'

import ansQue from "../arr.json";
import Done from "/Projects/reactProjects/questions_react/src/assets/img/wing.png"



function Header (){

  const [activeStep, setActiveStep, progress, setProgress, steps] =  React.useContext(HooksClick)

  const [activeCirlce, setactiveCirlce] = useState(0)
  const {id, text, que} = ansQue[activeCirlce];


  return (
    <div className="stepper-container">
     
<div className="progressContainer">
    
      <div className="progressMain">
      {ansQue.map((_,index) => (
            <div key={index}>
           
        {index !== 0 && (
    <div className={`line ${index < activeStep ? "filled" : ""} `}></div>)}

     <div className={`circle ${index === activeStep - 1 ? "current" : ""} ${index < activeStep - 1 ? "done" : ""}`}> {index + 1}</div>

    <div className={`step ${index < activeStep ? "done" : ""}`}>
      
    </div>
 
            </div>
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