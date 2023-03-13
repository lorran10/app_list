
import './App.css'
import React, { useState } from "react";
import { Container } from "@mui/system";
import Form from "./components/Form";
import { List } from "@mui/material";
import TodoItem from "./components/Todoitem"

function App() {
  
 const[todos,setTodos] =useState([]);

const todoHandler = (todo)=>{ 
   setTodos([...todos,todo]);
}

  return (
  <Container maxWidth="xs"style={{marginTop:"1em"}} >
      <Form todoHandler={todoHandler} />
       <List sx={{ marginTop:"1em",height:"1rem" }} >

        {todos.map((todo) => (
        <div style={{marginTop:"1em"}}>
        <TodoItem />
        </div>

        ))}
        
        </List>
  </Container>
    
  )
}

export default App
