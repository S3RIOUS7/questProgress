
import ansQue from "../../arr.json";
import '../answerFinal/answers.scss'
import React from "react";
import { HooksClick } from "../../hooks/hooks"
import  { useNavigate} from "react-router-dom";
import Button from "../../button/Button";


function Answers (){

  const {  setActiveStep, answers, setAnswers } =  React.useContext(HooksClick);
  const navigate = useNavigate();
  const goToMain = () =>{
    navigate('/')
    setActiveStep(0)
    setAnswers([])
  }

  return(
     <div className="answers-container" >
       
      <h2>Результаты</h2>
      {ansQue.map((question) => (
        <div key={question.id}>
          <h3> Вопрос: {question.que}</h3>
          <p>Ответ: {answers[question.id]}</p>
        </div>
      ))}
      <Button onClick={goToMain}>Вернуться</Button>
  </div>

  )
 

}

export default Answers