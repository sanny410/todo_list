import React from 'react';
import './style.scss'

const TodoEdit = () => {
    return (
        <div className="todo-list__edit-item">
            <h2 className="edit-item__title">Редактирование задачи №1</h2>
            <form>
                <select className="task__status">
                    <option className="status__item">Выполнена</option>
                    <option className="status__item">В процессе</option>
                    <option className="status__item">Ожидает</option>
                </select>
                <input className="task__text input" type="text" placeholder="Текст задачи"/>
                <input className="task__text input" type="text" placeholder="Исполнитель"/>
                <textarea className="task__comment input" rows={3} placeholder="Комментарий (не обязательно)"></textarea>
                <button className="btn edit__task">Редактировать</button>
            </form>
        </div>
    );
};

export default TodoEdit;