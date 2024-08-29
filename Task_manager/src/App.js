import React from 'react';
import './App.css';
import './components/TodoForm.js';

import TodoList from './components/TodoList.js';

function App() {
  return (
    <div className="todo-app">
      <h1>Todo app</h1>
      <TodoList/>
    </div>
  );
}

export default App;
