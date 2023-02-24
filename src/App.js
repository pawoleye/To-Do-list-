import React, { useEffect,useState } from 'react';
import './App.css';
import Todotext from './components/Todotext';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = "react-to-do-list-todos";

function App() {
  const [inputs, setInputs] = useState([]);
/*
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos){
      storageTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(inputs)); 
  }, [inputs]); */ 

  function addInput(input){
    setInputs([...inputs, input]);
  }

  function isComplete(s){
    console.log(s);
    for (let i = 0; i < inputs.length; i++) {
      if(inputs[i].id === s){
        setInputs({...inputs[i],
          completed: true
     });
      }
    }
  }  
  

  return (
    <div className="App">
      <header className="App-header">
       TO DO LIST
       <Todotext addInput={addInput}/>
       <TodoList inputs={inputs} isComplete={isComplete} />
      </header>
    </div>
  );
}

export default App;
