
import './App.css';
import Answers from './components/pages/answerFinal/Answers';
import Main from'./components/pages/main/Main'
import { HooksClick } from './components/hooks/hooks.js'
import React, { useState } from "react";
import  {Route, Routes, Link} from "react-router-dom";

function App() {

  const [ activeStep, setActiveStep ] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [allAnswersQuestions, setAllAnswersQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [allButtonsClicked, setAllButtonsClicked] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <HooksClick.Provider value={ [activeStep, setActiveStep, activeQuestion, setActiveQuestion, allAnswersQuestions, setAllAnswersQuestions, selectedAnswer, setSelectedAnswer, allButtonsClicked, setAllButtonsClicked, buttonClicked, setButtonClicked] }>
       <div className='container'>
       <Routes>
       <Route path ='/' element ={ <Main /> }/>
       <Route path ='/Answers' element ={ <Answers /> }/>
      </Routes>   
     </div>
    </HooksClick.Provider>
    )

}

export default App;
