import React  from "react";
import Todo from "./Todo";

function TodoList({inputs , isComplete , erase}){
    return(
    <ul>
        {inputs.map(input =>( 
            <Todo key={input.id} input={input} isComplete={isComplete} erase={erase} />
        ))}
    </ul>
);}

export default TodoList;