import "../answerFinal/answers.scss"
import ansQue from "../../arr.json";
import {  Fragment} from "react";
import React from "react";
import { HooksClick } from "../../hooks/hooks"
import  { useNavigate} from "react-router-dom";


function Answers (){

  const { activeStep, setActiveStep, answers, setAnswers } =  React.useContext(HooksClick);
  const navigate = useNavigate();
  const goToMain = () =>{
    navigate('/')
    setActiveStep(0)
    setAnswers({})
  }

  return(
     <Fragment >
      <h2>Результаты</h2>
      {ansQue.map((question) => (
        <div key={question.id}>
          <h3> Вопрос: {question.que}</h3>
          <p>Ответ: {answers[question.id]}</p>
        </div>
      ))}
      <button onClick={() => goToMain()}>Вернуться</button>
  </Fragment>

  )
 

}

export default Answers