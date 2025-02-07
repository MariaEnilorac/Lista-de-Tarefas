import { useState } from 'react';

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
      text: "aaaaaaaaa",
      category: "Trabalho",
      inCompleted: false,
    },
    {
      id: 3,
      text: "aaaaaaaaa",
      category: "Trabalho",
      inCompleted: false,
    },
  ]);

  return  <div className="app">
      <h1>Lista de Tarefas</h1>
    <div className="todo-list">

    </div>
    </div>
  ;
}

export default App;
