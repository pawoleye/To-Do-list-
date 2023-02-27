import React  from "react";

function Todo({ input , isComplete , erase }){
    function handleCheckbox(){
        isComplete(input.id);
    } 

    function handleExit(){
        erase(input.id);
    }
    return(   
    <div style= {{ display: "flex"}}>
        <input type="checkbox"  onClick={handleCheckbox}/> 
        <li style={{color: "white", 
        textDecoration: input.completed? "line-through" : null}}>  
        {input.task} </li>
        <button onClick={handleExit}>x</button>
    </div>
)};

export default Todo;

