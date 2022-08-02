import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import './style.scss'


const TodoList = () => {
    const [ todo, setTodo ] = useState([{id: 1, task: 'Купить шоколадку', status: 'expected'},
        {id: 2, task: 'Сделать тудушку', status: 'in-the-process'},
        {id: 3, task: 'Сходить в магазин', status: 'performed'}]);

    return (
        <div className="todo-list _container">
            <h2 className="todo-list__title">Список задач</h2>
            <input className="search__task" type="text" placeholder="Поиск"/>
            <ul className="list__task">
                {todo.map((item, id) => {
                    return <TodoItem key={id} item={item} id={id + 1} setTodo={setTodo}/>
                })}
            </ul>
        </div>
    );
};

export default TodoList;