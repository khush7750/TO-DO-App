import React , {useReducer} from 'react';
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';

import {TodoContext} from "./context/todoContext"
import todoReducer from  "./context/reducer"
import TodoForm from './components/form';
import Todos from "./components/todos"

const App = () =>{
  const[todos, dispatch] = useReducer(todoReducer,[])

  return(
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1>TODO App with contaxt API</h1>
      <Todos/>
      <TodoForm/>
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
