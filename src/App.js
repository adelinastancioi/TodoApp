import React, {useState} from 'react';
import './App.css';
import From from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>Ade's Todo List</h1>
      </header>
    <From setInputText={setInputText}></From>
    <TodoList ></TodoList>
    </div>
  );
}

export default App;
