
import './App.css';
import Answers from './components/pages/answerFinal/Answers';
import Main from'./components/pages/main/Main'

import React, { useState } from "react";
import  {Route, Routes, Link} from "react-router-dom";

function App() {

  const [ activeStep, setActiveStep ] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [allAnswersQuestions, setAllAnswersQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [allButtonsClicked, setAllButtonsClicked] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const goToMainPage = () => {
    setActiveStep(0);
    setActiveQuestion(0);
    setAllAnswersQuestions([]);// обновляю все стейты до первоночальных
    setSelectedAnswer(null);
    setAllButtonsClicked(false)
    setButtonClicked(false);
  }
  
  
  return (
   
       <div className='container'>
       <Routes>
       <Route path ='/' element ={ <Main goToMainPage={goToMainPage}
       activeStep={activeStep}
       setActiveStep={setActiveStep}
       activeQuestion={activeQuestion}
       setActiveQuestion={setActiveQuestion}
       allAnswersQuestions={allAnswersQuestions}
       setAllAnswersQuestions={setAllAnswersQuestions}
       selectedAnswer={selectedAnswer}
       setSelectedAnswer={setSelectedAnswer}
       allButtonsClicked={allButtonsClicked}
       setAllButtonsClicked={setAllButtonsClicked}
       buttonClicked={buttonClicked}
       setButtonClicked={setButtonClicked}
       /> }/> 
       <Route path ='/Answers' element ={ <Answers 
       goToMainPage={goToMainPage} 
       activeQuestion={activeQuestion} 
       allAnswersQuestions={allAnswersQuestions} 
       setActiveQuestion={setActiveQuestion} 
       /> }/>
      </Routes>   
     </div>
   
    )

}

export default App;
