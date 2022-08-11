import React, {useEffect,  useState} from 'react';
import './App.scss';
import TodoList from '../TodoList/TodoList'
import TodoEdit from "../TodoEdit/TodoEdit";

//Задаю тип объекта задачи
export type Task = {
    id: number,
    task: string,
    status: string,
    executor: string,
    comment: string
}


function App() {
    const [ todo, setTodo ] = useState<Task[]>(() => JSON.parse(localStorage.getItem("todos") as string) || []);
    const [ editTodoItem, setEditTodoItem ] = useState<Task>({id: 0, task: '', status: '', executor: '', comment: ''});


    //Обновляю localstorage при каждом изменении списка задач
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo));
    },[todo])


  return (
    <main className="main-page">
      <TodoList todo={todo} setTodo={setTodo} setEditTodoItem={setEditTodoItem} editTodoItem={editTodoItem}/>
      <TodoEdit editTodoItem={editTodoItem} setEditTodoItem={setEditTodoItem} todo={todo} setTodo={setTodo}/>
    </main>
  );
}

export default App;
