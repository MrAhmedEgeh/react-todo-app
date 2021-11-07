import React, {useState, useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faMinusSquare, faCheck} from '@fortawesome/free-solid-svg-icons';

const Todo = ({todo, id,checkbox, Todos, SetTodos}) => {

    const [editTodo, SetEditTodo] = useState(false);
    const [editValue, SetEditValue] = useState(todo);
    const Todo = useRef(null);

    useEffect(() => {
        if(checkbox && Todo.current !== null){
            Todo.current.style = "text-decoration: line-through"
        }else if(checkbox && Todo.current !== null){
            Todo.current.style = "text-decoration: none"
        }
    })
    // HANDLERS
    const StrikeThrough = () => {
        if(checkbox){
            Todo.current.style = "text-decoration: none"
           SetTodos(Todos.map((tod) => tod.id === id ? ({...tod, done: false}) : ({...tod})));
        }else{
            Todo.current.style = "text-decoration: line-through"
            SetTodos(Todos.map((tod) => tod.id === id ? ({...tod, done: true}) : ({...tod})));
        }
    }
    const EditTrigger = () => {
        SetEditTodo(true);
    }

    const submitEdit = () => {
        SetTodos(Todos.map((tod) => tod.id === id ? ({...tod, text: editValue}) : ({...tod})));
        SetEditTodo(false);
    }
    const DeleteTodo = () => {
        
        SetTodos(Todos.filter((el) => (el.id !== id)));
    }
    return(
        <div class="todo" key={id}>
            <div className="right">
            {
                editTodo === true ? 
                (<input type="text" onChange={(e) => SetEditValue(e.target.value)} value={editValue} />)
                :
                (
                <>
                <input onClick={() => StrikeThrough()} type="checkbox" defaultChecked={checkbox}/>
                <span ref={Todo}>{todo}</span>
                </>
                    )
            }
            </div>
            <div className="btns">
            {
                editTodo === false ? 
                (
                    <>
                    <FontAwesomeIcon onClick={(e) => EditTrigger()} className="EditBtn" size="1x" icon={faEdit}/>
                    <FontAwesomeIcon onClick={DeleteTodo} className="DeleteBtn" size="1x" icon={faMinusSquare}/>
                    </>
                )
                :
                (
                    <FontAwesomeIcon onClick={submitEdit} className="EditBtn" size="1x" icon={faCheck}/>
                )
            }
            </div>
        </div>
    );
}

export default Todo;