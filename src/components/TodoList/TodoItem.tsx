import React, {useEffect, useState} from 'react';
import {Task} from "../App/App";
import './style.scss'


const TodoItem = ({item, id, setTodo, todo, setEditTodoItem}:
                      {item: Task, id: number, setTodo: Function, todo: Task[],
                          setEditTodoItem: Function, editTodoItem: Task}) => {

    const [colorStatus, setColorStatus] = useState('expect');


    //Изменяет цвет задачи в зависимости от статуса при каждом его изменении
    useEffect(() => {
        if(item.status === "Ожидает") {
            setColorStatus('expect')
        } else if(item.status === "В процессе") {
            setColorStatus('in_the_process')
        } else setColorStatus('finished')
    }, [item.status])

    /**
     * Изменяет массив при удалении одной задачи
     */
    const deleteTask = () => {
        setTodo([...todo.filter((card: Task) => card.id !== item.id)])
    }

    /**
     * Изменяет задачу в поле редактирования
     * @param {number} id индекс редактируемой задачи
     */
    const editTask = (id: number) => {
        setEditTodoItem(todo[id - 1])
    }

    // Ограничиваем длину текста задачи
    if (item.task.length >= 30) {
        item.task = item.task.slice(0, 30) + '...'
    }


    return (
        <li className={`todo-list__item ${colorStatus}`}>
            <div>{id}. {item.task} </div>
            <div className="icons">
                <img src={require('../../assets/delete.png')} alt="delete_task" onClick={deleteTask}/>
                <img src={require('../../assets/edit.png')} alt="edit_task" onClick={() => editTask(id)}/>
            </div>
        </li>
    );
};

export default TodoItem;