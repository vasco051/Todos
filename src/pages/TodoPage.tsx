import React, {FC, useMemo} from 'react';
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import {getSearchTodos, getSortedTodos} from "../utils/todos";
import todoStore from "../store/TodoStore";
import {observer} from "mobx-react-lite";
import searchStore from "../store/SearchAndSortStore";


const TodoPage: FC = observer(() => {

    const sortedTodos = useMemo(() => {
        return getSortedTodos(todoStore.todos, searchStore.selectSort)
    }, [searchStore.selectSort, todoStore.todos])

    const sortedAndSearchTodos = useMemo(() => {
        return getSearchTodos(sortedTodos, searchStore.searchValue)
    }, [searchStore.searchValue, sortedTodos])

    return (
        <div className='todo-page'>
            <TodoForm/>
            <TodoList todos={sortedAndSearchTodos}/>
        </div>
    )
})

export default TodoPage;