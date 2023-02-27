import React, { useState } from 'react';

function Todotext({ addInput }){
    const [input, setInput] = useState({
        id : "",
        task: "",
        completed : false
    });

    function handleInputChange(e){
        setInput({...input,
             task: e.target.value
        });
    }

    function handleSubmit(e){
     e.preventDefault();

     if (input.task.trim()){   
        input.id = crypto.randomUUID();
        addInput(input);
    }
    }

    return(
     <form onSubmit={handleSubmit}>
        <input name= "task" type= "text" value={input.task} onChange={handleInputChange} />
        <button type="submit">Add</button>
     </form>

    );
}

export default Todotext;
