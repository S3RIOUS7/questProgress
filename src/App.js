
import './App.css';
import Answers from './components/pages/answerFinal/Answers';
import Main from'./components/pages/main/Main'
import {HooksClick} from './components/hooks/hooks.js'
import React, { useState } from "react";
import  {Route, Routes, Link} from "react-router-dom";

function App() {

  const [ activeStep, setActiveStep ] = useState(0);
 


  
  
  return (
    <HooksClick.Provider value={ activeStep, setActiveStep }>
       <div className='container'>
       <Routes>
       <Route path ='/' element ={ <Main  /> }/> 
       <Route path ='/Answers' element ={ <Answers /> }/>
      </Routes>   
     </div>
   </HooksClick.Provider>
    )

}

export default App;
