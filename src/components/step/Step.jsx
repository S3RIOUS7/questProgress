import React from "react";
import ansQue from '../arr.json'
import Input from '../input/Input'
import { Fragment, useState } from "react";
import {HooksClick} from '../hooks/hooks'
import '../step/step.scss'


const Step = ( {item} ) => {
  const {activeStep, setActiveStep,  setAnswers, setActiveModal} =  React.useContext(HooksClick);

  const [first, setFirst] = useState(null)

  const changeInput = (event) => {
    const answer = event.target.value
   
    setTimeout(() => setActiveStep((prevStep) => prevStep + 1), 300);
    setAnswers((prevAnswers) =>  [ ...prevAnswers, answer ] );
  
     setFirst(answer)
     
  if (activeStep + 1 === ansQue.length ){
    setActiveModal(true)
  }
  };

  return (

        <Fragment>
          <h2>{item.que}</h2>
          {item.text.map((answer, index) => (
            <label className="step-container"  key={index}>
              <p>{answer}</p>
              <Input 
                value={answer}
                onChange={ changeInput}
                type="radio"
                checked={first === answer}
              />
            </label>
          ))}
        </Fragment>

  );
};
export default Step;