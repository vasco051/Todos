import React, {FC} from 'react';
import todoStore from "../../store/TodoStore";
import TodoItem from "../TodoItem/TodoItem";
import {observer} from "mobx-react-lite";
import './TodoList.css'


const TodoList: FC = observer(() => {
    return (
        <div className='todo-list box'>
            {todoStore.todos.length
                ? todoStore.todos.map(todo =>
                    <TodoItem todo={todo} key={todo.id}/>
                )
                : <h2 className='todo-list-title'>Todos not find</h2>
            }
        </div>
    );
});

export default TodoList;