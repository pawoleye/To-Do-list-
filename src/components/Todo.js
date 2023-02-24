import React  from "react";

function Todo({ input , isComplete }){
    /*
    function handleCheckbox(){
        isComplete(input.id);
    } */

    return(   
    <div style= {{ display: "flex"}}>
        <input type="checkbox" /* onClick={handleCheckbox}*//> 
        <li style={{color: "white", 
        textDecoration: input.completed? "line-through" : null}}>  
        {input.task} </li>
        <button>x</button>
    </div>
)};




export default Todo;

