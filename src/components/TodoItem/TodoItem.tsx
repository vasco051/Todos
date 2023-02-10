import React, {FC} from 'react';
import {ITodo} from "../../types/todo";
import {observer} from "mobx-react-lite";
import todoStore from "../../store/TodoStore";
import './TodoItem.css'

interface TodoItemProps{
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = observer(({todo}) => {

    const btnCompletedClasses: string[] = ['btn primary icon']
    if (todo.completed) {
        btnCompletedClasses.push('completed')
    }

    return (
        <div className='todo'>
            <div className="todo-content">
                <div className='todo-header'>
                    <h3 className='todo-title'>{todo.title}</h3>
                    <div className='todo-time'>{todo.dateOfCreation.time}</div>
                </div>
                <div className="todo-body">
                    <p>{todo.body}</p>
                </div>
            </div>
            <div className="todo-buttons flex">
                <button className={btnCompletedClasses.join(' ')} onClick={() => todoStore.checkedTodo(todo.id)}>&#9733;</button>
                <button className='btn primary icon' >&#9998;</button>
                <button className='btn danger icon' onClick={() => todoStore.removeTodo(todo.id)}>&#10006;</button>
            </div>
        </div>
    );
});

export default TodoItem;