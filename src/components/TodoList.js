import React from 'react';
import Todo from './Todo';

const ToDoList = ({todos,setTodos,  filteredTodos}) => {

    return (
        <div className="todo-container">
        <ul className="todo-list">
         {filteredTodos.map(todo => (
           <Todo 
           key ={todo.id} 
           setTodos={setTodos} 
           todo={todo}
           todos={todos}
           text={todo.text}/>
         ))}
        </ul>
      </div>
    );

};

export default ToDoList;