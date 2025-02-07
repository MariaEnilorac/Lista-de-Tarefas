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

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
           <Todo todo={todo} />
          </div>
        ))}
      </div>
      <TodoForm />
    </div>
  );
}

export default App;
