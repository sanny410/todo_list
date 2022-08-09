import React, {useRef, MutableRefObject, useState} from 'react';
import TodoItem from "./TodoItem";
import './style.scss'

type Task = {
    id: number,
    task: string,
    status: string,
    executor: string,
    comment: string
}


const TodoList = ({todo, setTodo, setEditTodoItem, editTodoItem}
                      : {todo: Task[], setTodo: Function, setEditTodoItem: Function, editTodoItem: Task}) => {

    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
    const [value, setValue] = useState('')

    const filteredListTodos = todo.filter(item => {
        return item.task.toLowerCase().includes(value.toLowerCase())
    })

    const addTodo = () => {
        let newValue = inputRef.current.value;
        if (inputRef.current.value !== '') {
            let newTask: Task = {id: todo[todo.length - 1].id + 1, task: newValue, status: "Ожидает",
                executor: "", comment: "" }
            setTodo((todo: Task[]) => [...todo, newTask])
            inputRef.current.value = ''
        }
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTodo()
        }
    }


    return (
        <div className="todo-list _container">
            <h2 className="todo-list__title">Список задач</h2>
            <input className="search__task input"
                   type="text"
                   placeholder="Поиск"
                   onChange={(event) => setValue(event.target.value)}
            />
            <ul className="list__task">
                {filteredListTodos.map((item, id) => {
                    return <TodoItem key={id}
                                     item={item}
                                     id={id + 1}
                                     setTodo={setTodo} todo={todo}
                                     setEditTodoItem={setEditTodoItem}
                                     editTodoItem={editTodoItem}/>
                })}
            </ul>
            <input onKeyPress={handleKeyPress} ref={inputRef} className="add-task input" type="text" placeholder="Новая задача"/>
            <button className="btn send-btn" onClick={addTodo}>Добавить</button>
        </div>
    );
};

export default TodoList;