import React  from 'react'

import "../input/input.scss"

const Input = ({value, onChange, type, onClick, checked}) => {
    

    
   
    return(
        <div>
            <input value={value} onChange={onChange} type={type} onClick={onClick} checked={checked}/> 
        </div>
    );
}

export default Input