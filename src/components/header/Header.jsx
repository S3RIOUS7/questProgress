import React, { Fragment } from "react";
import "../header/header.scss";

import { HooksClick } from "../../components/hooks/hooks";

import ansQue from "../arr.json";


function Header(  ) {

  const {activeStep} =  React.useContext(HooksClick);
 
  return (
    <div className="stepper-container">
     
      
      <div className="progressMain">
        {ansQue.map((_, index) => (
          <Fragment key={index}>
            {index !== 0 && (
              <div className={`line ${index < activeStep  ? "filled" : ""} `} />
            )}
            <div className={`circle ${index === activeStep - 1 ? "current" : ""} ${index  < activeStep - 1 ? "done" : ""}`} >
             
            <div className={`step ${index < activeStep ? "done" : ""}`}> {index + 1}</div></div>

          </Fragment>
        ))}
      </div>

     
    </div>
  );
}
export default Header;
