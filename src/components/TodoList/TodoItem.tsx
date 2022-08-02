import React from 'react';
import './style.scss'

type Task = {
    id: number,
    task: string,
    status: string
}

const TodoItem = ({item, id, setTodo}: {item: Task, id: number, setTodo: Function}) => {
    return (
        <li className="todo-list__item">
            <div>{id}. {item.task}</div>
            <div className="icons">
                <img src={require('../../assets/delete.png')} alt="delete_task"/>
                <img src={require('../../assets/edit.png')} alt="edit_task" />
            </div>
        </li>
    );
};

export default TodoItem;