import React from "react";
import ansQue from '../arr.json'
import Input from '../input/Input'
import { Fragment, useState } from "react";
import {HooksClick} from '../hooks/hooks'
import ModalWindow from "../modalWindow/ModalWindow";

function Step(){
  const {activeStep, setActiveStep, answers, setAnswers } =  React.useContext(HooksClick);
 
 
  const activeQuestion = ansQue[activeStep];

  const changeInput = (questionId, answer) => {
    setAnswers((prevAnswers) =>  ({ ...prevAnswers, [questionId]: answer }) );
     setActiveStep((prevStep) => prevStep + 1);
  };
 

console.log(activeStep)
  return (
    <Fragment>

      {activeStep  < ansQue.length  ? (
        <Fragment>
          <h2>{activeQuestion.que}</h2>
          {activeQuestion.text.map((answer, index) => (
            <label key={index}>
              {answer}
              <Input
                value={answer}
                onChange={() => changeInput(activeQuestion.id, answer)}
                type="radio"
                checked={answers[activeQuestion.id] === answer}
              />
            </label>
          ))}
         
        </Fragment>
      ) : (
       <>
          <ModalWindow />
          </>
          )}
        
      
    </Fragment>
  );
};
export default Step;