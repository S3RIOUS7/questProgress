
import ansQue from "../arr.json";
import React from "react";
import { Fragment, useState } from "react";
import  "./allSteps.scss";
import Step from '../step/Step'
import {HooksClick} from '../hooks/hooks'




function AllSteps() {
  const { activeStep, setActiveStep, answers, setAnswers } = React.useContext(HooksClick);
  const [buttonActive, setButtonActive] = useState(false)

  const startShit = () =>{
    setButtonActive(true);}
  

  return (
    <Fragment>
      <div>
        {!buttonActive ? ( 
          <Fragment>
            <h2>Start this piece of ...</h2>
            <button onClick={startShit}>Start</button>
          </Fragment>
        ) : (
          <Fragment>
            {ansQue.map((item) => (
              <Fragment key={item.id}>
                {item.id === activeStep && (
                  <Step item={item} setStep={setActiveStep} step={activeStep} setAnswers={setAnswers} />
                )}
              </Fragment>
            ))}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default AllSteps;
