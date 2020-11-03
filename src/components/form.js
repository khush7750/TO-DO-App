import React, {useState , useContext} from "react"
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon, Alert
} from "reactstrap"

import {v4} from 'uuid';
import {TodoContext} from '../context/todoContext';

import {ADD_TODO} from "../context/actiontypes";


const TodoForm = () =>{

    const [todoString , setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handelSubmit = e =>{
        e.preventDefault();
        if (todoString === "") {
            return alert("please enter a todo")
        }
        const todo = {
            todoString,
            id: v4()
        }
        dispatch({
            type:ADD_TODO,
            payload: todo
        })

        setTodoString("")
    }

    return(
        <Form onSubmit={handelSubmit}>
            <FormGroup>
                
                <InputGroup>
                    <Input 
                    type= "text"
                    name= "todo"
                    id= "todo"
                    placeholder= "your next todo"
                    value ={todoString}
                    onChange={e => setTodoString(e.target.value)}
                    >
                    </Input>
    
                    <InputGroupAddon addonType="prepend">
                       <Button
                        color="warning"
                        // todo on click
                    >
                            ADD-TODO
                        </Button>
                    </InputGroupAddon>
                    </InputGroup>

            </FormGroup>
        </Form>
    )
}

export default TodoForm