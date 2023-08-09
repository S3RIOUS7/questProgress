
import './App.css';
import Answers from './components/pages/answerFinal/Answers';
import Main from'./components/pages/main/Main'
import {HooksClick} from './components/hooks/hooks.js'
import React, { useState } from "react";
import  {Route, Routes} from "react-router-dom";
import ModalWindow from './components/modalWindow/ModalWindow';

function App() {

  const [ activeStep, setActiveStep ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [activeModal, setActiveModal] = useState(false)

  
  

  return (
    <HooksClick.Provider value={{ activeStep, setActiveStep, answers, setAnswers, activeModal, setActiveModal }}>
       <div className='container'>
       <Routes>
       <Route path ='/' element ={ <Main  /> }/> 
       <Route path ='/Answers' element ={ <Answers /> }/>
      </Routes>   
      {activeModal && <ModalWindow />}
     </div>
   </HooksClick.Provider>
    )

}

export default App;
