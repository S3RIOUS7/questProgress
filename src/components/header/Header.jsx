
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
     { activeStep !== steps.length 
          &&  (
      <div className="progressMain">
      {ansQue.map((_,index) => (
            <div key={index} className={`circle ${activeStep > index ? 'active' : ''}`}>
              {activeStep > index && <img width="15" src={Done}  />}
            </div>
          ))}
      </div>)}
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