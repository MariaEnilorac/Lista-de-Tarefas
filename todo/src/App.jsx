import { useState } from 'react';
import "./App.css";
import { Todo } from './components/Todo';
import { TodoForm } from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "aaaaaaaaa",
      category: "Trabalho",
      inCompleted: false,
    },
    {
      id: 2,
      text: "bbbbbbbbb",
      category: "Casa",
      inCompleted: false,
    },
    {
      id: 3,
      text: "ccccccccc",
      category: "Estudo",
      inCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000), 
      text,
      category,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };
  

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
           <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />

    </div>
  );
}

export default App;
