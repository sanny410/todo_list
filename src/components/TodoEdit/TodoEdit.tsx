import React, {useEffect, useState} from 'react';
import './style.scss'
import { Task } from "../TodoList/TodoItem";

const TodoEdit = ({editTodoItem, setEditTodoItem, todo, setTodo}
                      : {editTodoItem: Task, setEditTodoItem: Function, todo: Task[], setTodo: Function} ) => {

    const [status, setStatus] = useState<string>(editTodoItem.status);
    const [task, setTask] = useState<string>(editTodoItem.task);
    const [comment, setComment] = useState<string>(editTodoItem.comment);
    const [executor, setExecutor] = useState<string>(editTodoItem.executor);

    useEffect(() => {
        setStatus(editTodoItem.status)
        setTask(editTodoItem.task)
        setExecutor(editTodoItem.executor)
        setComment(editTodoItem.comment)
    }, [editTodoItem])

    return (
        <div className="todo-list__edit-item">
            <h2 className="edit-item__title">Редактирование задачи №{editTodoItem.id}</h2>
            <form>
                <select className="task__status" value={status} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setStatus(event.target.value)} >
                    <option className="status__item">Выполнена</option>
                    <option className="status__item">В процессе</option>
                    <option className="status__item">Ожидает</option>
                </select>
                <input className="task__text input"
                       value={task}
                       type="text"
                       placeholder="Текст задачи"
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTask(event.target.value)}/>
                <input className="task__text input"
                       type="text"
                       placeholder="Исполнитель"
                       value={executor}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => setExecutor(event.target.value)}/>
                <textarea className="task__comment input"
                          rows={3}
                          placeholder="Комментарий (не обязательно)"
                          value={comment}
                          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setComment(event.target.value)}/>
                <button className="btn edit__task"
                onClick={(event) => {
                    event.preventDefault()
                    let indexItem = todo.indexOf(editTodoItem);
                    let newArr = todo.slice();
                    newArr[indexItem] = {
                        id: editTodoItem.id,
                        task: task,
                        status: status,
                        executor: executor,
                        comment: comment
                    }
                    setTodo(newArr);
                    setEditTodoItem({
                        id: 0,
                        task: "",
                        status: "",
                        executor: "",
                        comment: ""
                    })
                    }}>
                    Редактировать</button>
            </form>
        </div>
    );
};

export default TodoEdit;