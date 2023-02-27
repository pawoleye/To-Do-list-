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
      setInputs(inputs.map(i =>{
        if(i.id === s){
          return{ 
            ...i,
            completed: !i.completed 
          }
        }
        return i;    
  }));
}  

  function erase(s){
    setInputs(inputs.filter(i =>
        i.id != s
    ));
  }
  
  return (
    <div className="App">
      <header className="App-header">
       TO DO LIST
       <Todotext addInput={addInput}/>
       <TodoList inputs={inputs} isComplete={isComplete} erase={erase} />
      </header>
    </div>
  );
}

export default App;
