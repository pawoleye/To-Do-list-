import React  from "react";
import Todo from "./Todo";

function TodoList({inputs , isComplete}){
    return(
    <ul>
        {inputs.map(input =>( 
            <Todo key={input.id} input={input} /*isComplete={isComplete}*/ />
        ))}
    </ul>
);}

export default TodoList;