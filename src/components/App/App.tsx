import React from 'react';
import './App.scss';
import TodoList from '../TodoList/TodoList'
import TodoEdit from "../TodoEdit/TodoEdit";

function App() {
  return (
    <main className="main-page">
      <TodoList />
      <TodoEdit />
    </main>
  );
}

export default App;
