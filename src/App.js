
import './App.css';
import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {useState} from 'react';
import {useEffect} from 'react';
import db from './firebase_config';
import firebase from 'firebase';
import TodoListItem from "./Todo"

function App() {
  const [todoInput, setTodoInput]= useState("");
  const [todos, setTodos]= useState([]);
  useEffect( () => {
    getTodos();
  }, []) //blank to run on on first launch

  function addTodo(e){
    e.preventDefault();
    if(todoInput.trim().length !==0){
    db.collection("todos").add({
      inProgress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    })
    setTodoInput("");
  }
}

  function getTodos(){
    db.collection("todos").onSnapshot(function(querySnapshot){
      setTodos(querySnapshot.docs.map((doc)=> ({
        id: doc.id,
        todo: doc.data().todo,
        inProgress: doc.data().inProgress
      })));
  })
  }
 //function blank_todo(e){
  // let data= e.target.value;
//   if(data=== ""){ alert("to-do cannot be empty");}
//   else {setTodoInput(data);}
 //}

  return (
    <div className="App" >
    <div style={{display: "flex",
                 flexDirection: "column",
                 alignItems: "center",
                 justifyContent: "center",
                 width: "100%"
               }}>

  <h1>Ritika Awasthy's To-do App🌸</h1>
  <form>
  <TextField id="standard-basic" onChange={(e)=>setTodoInput(e.target.value)}
    value={todoInput}
    label="write a to-do"
    style={{maxWidth: "500px", width: "90vw"}}/>
  <Button variant="contained" onClick={addTodo} type="submit" color="secondary">Enter</Button>
  </form>
  <div style={{maxWidth: "500px", width: "90vw" , marginTop: "24px"}}>
  {todos.map((todo)=>(
    <TodoListItem todo= {todo.todo} inprogress={todo.inProgress} id={todo.id} />
  ))}
  </div>
    </div>
    </div>
  );
}

export default App;
