import React, {useEffect, useState} from 'react';
import './style.scss'

export type Task = {
    id: number,
    task: string,
    status: string,
    executor: string,
    comment: string
}

const TodoItem = ({item, id, setTodo, todo, setEditTodoItem}:
                      {item: Task, id: number, setTodo: Function, todo: Task[],
                          setEditTodoItem: Function, editTodoItem: Task}) => {

    const [colorStatus, setColorStatus] = useState('expect');

    useEffect(() => {
        if(item.status === "Ожидает") {
            setColorStatus('expect')
        } else if(item.status === "В процессе") {
            setColorStatus('in_the_process')
        } else setColorStatus('finished')
    }, [item.status])

    const deleteTask = (id: number) => {
        setTodo([...todo.filter((card: Task) => card.id !== item.id)])
    }

    const editTask = (id: number) => {
        setEditTodoItem(todo[id - 1])
    }

    if (item.task.length >= 30) {
        item.task = item.task.slice(0, 30) + '...'
    }


    return (
        <li className={`todo-list__item ${colorStatus}`}>
            <div>{id}. {item.task} </div>
            <div className="icons">
                <img src={require('../../assets/delete.png')} alt="delete_task" onClick={() => deleteTask(id)}/>
                <img src={require('../../assets/edit.png')} alt="edit_task" onClick={() => editTask(id)}/>
            </div>
        </li>
    );
};

export default TodoItem;