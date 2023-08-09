
import ansQue from "../arr.json";
import React from "react";
import { Fragment, useState } from "react";
import  "./allSteps.scss";
import Step from '../step/Step'
import {HooksClick} from '../hooks/hooks'
import Button from "../button/Button";



function AllSteps() {
  const {activeStep } =  React.useContext(HooksClick);
 
  const [buttonActive, setButtonActive] = useState(false)

  
  const startShit = () =>{
    setButtonActive(true);}
  

  return (
    <div className="allSteps-container">
      
        {!buttonActive ? ( 
          <Fragment>
            <h2>Start this piece of ...</h2>
            <Button onClick={startShit}>Start</Button>
          </Fragment>
        ) : (
          <Fragment>
            {ansQue.map((item) => (
              <Fragment key={item.id}>
                
             {item.id === activeStep && 
              <Fragment>
                 <Step item={item}  />
              </Fragment>
            }
            </Fragment>
            ))}
        </Fragment>
        )}
      </div>
    
  );
}

export default AllSteps;
