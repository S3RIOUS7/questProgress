
import ansQue from '../arr.json'
import Input from '../input/Input'
import { Fragment, useState } from "react";

function Step(){
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const activeQuestion = ansQue[step];

  const handleInputChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
    setStep((prevStep) => prevStep + 1);
  };

 const reloadPage = () => {
   window.location.reload()
 }

  return (
    <div>
      {step < ansQue.length ? (
        <>
          <h2>{activeQuestion.que}</h2>
          {activeQuestion.text.map((answer, index) => (
            <label key={index}>
              {answer}
              <Input
                value={answer}
                onChange={() => handleInputChange()}
                type="radio"
                checked={answers[activeQuestion.id] === answer}
              />
            </label>
          ))}
         
        </>
      ) : (
        <>
          <button onClick={() => reloadPage()}>Начни заново</button>
        </>
      )}
    </div>
  );
};
export default Step;