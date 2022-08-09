import React, { useState} from 'react';
import './App.scss';
import TodoList from '../TodoList/TodoList'
import TodoEdit from "../TodoEdit/TodoEdit";
import data from "../../data.json";
import { Task} from "../TodoList/TodoItem";

function App() {
    const [ todo, setTodo ] = useState(data || []);
    const [ editTodoItem, setEditTodoItem ] = useState<Task>({id: 0, task: '', status: '', executor: '', comment: ''});


  return (
    <main className="main-page">
      <TodoList todo={todo} setTodo={setTodo} setEditTodoItem={setEditTodoItem} editTodoItem={editTodoItem}/>
      <TodoEdit editTodoItem={editTodoItem} setEditTodoItem={setEditTodoItem} todo={todo} setTodo={setTodo}/>
    </main>
  );
}

export default App;
