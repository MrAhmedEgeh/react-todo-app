import React from 'react';
import Todo from './Todo';

const Todolist = ({Todos, SetTodos}) => {
    return(
        <div class="todolist">
            {Todos.map((todo, i) => (
                <Todo todo={todo.text} checkbox={todo.done} Todos={Todos} SetTodos={SetTodos} id={todo.id} key={i}/>
            ))}
        </div>
    );
}

export default Todolist;