import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from "uuid";

const Input = ({input, SetInput,Todos, SetTodos}) => {
    //------HANDLERS--------
    // SET THE INPUT STATE
    const TypeSomething = (e) => {
        SetInput({id: uuidv4(), text: e.target.value, done: false});
    }
    // SUBMIT INPUT TO TODOS ARRAY
    const addTodo = () =>{
        // DO NOT SUBMIT EMPTY TODO
        if(input.text === '' || input.text === undefined)return
        // DO NOT SUBMIT DUBLICATED TODOS
        if(checkDublicates() === false){
            SetTodos([...Todos, input]);
        }
    }
    // GO THROUGH TODOS ARRAY TO FIND DUBLICATES
    const checkDublicates = () =>{
      let bool = false;
       Todos.forEach((todo) => {
            if(todo.text === input.text){
                bool = true;
            }
       });
       return bool;
    }
    return(
        <div class="todo-input">
            <input 
            className="input" 
            type="text" 
            placeholder="Type something..." 
            onKeyUp={TypeSomething}  // UPDATE INPUT STATE ON EACH KEY PRESS
            onKeyPress={(e) => e.key === 'Enter' ? addTodo() : ''} // SUBMIT TODO WHEN ENTER KEY PRESSED
            />
            <FontAwesomeIcon onClick={addTodo} className="PlusBtn" size="1x" icon={faPlus}/>
        </div>
    );
}

export default Input;