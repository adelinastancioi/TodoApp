import React from 'react';
//import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const Form = ({setInputText}) => {
    //here you caan write javascript code and functions
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    return (
        <form>
        <input  onChange = {inputTextHandler} type="text" className="todo-input" />
        <button class="todo-button" type="submit">
          <i class="fas fa-plus-square"></i>
        </button>
        <div class="select">
          <select name="todos" class="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>    
    );
};

export default Form;