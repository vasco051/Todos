import React, {FC} from 'react';
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";


const TodoPage: FC = () => {
    return (
        <div className='todo-page'>
            <TodoForm/>
            <TodoList/>
        </div>
    )
}

export default TodoPage;