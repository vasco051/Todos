import React, {FC, useEffect, useMemo, useState} from 'react';
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import {getSearchTodos, getSortedTodos} from "../utils/todos";
import todoStore from "../store/TodoStore";
import {observer} from "mobx-react-lite";
import Search from "../components/Search/Search";
import './TodoPage.css'
import searchAndSortStore from "../store/SearchAndSortStore";


const TodoPage: FC = observer(() => {
  const sortedTodos = useMemo(() => {
    return getSortedTodos(todoStore.todos, searchAndSortStore.selectSort)
  }, [searchAndSortStore.selectSort, todoStore.todos])

  const sortedAndSearchTodos = useMemo(() => {
    return getSearchTodos(sortedTodos, searchAndSortStore.searchValue)
  }, [searchAndSortStore.searchValue, sortedTodos])

  return (
    <div className='todo-page'>
      <section className='todo-page-search box'>
        <Search/>
      </section>
      <section className='todo-page-todos box'>
        <TodoForm/>
        <TodoList todos={sortedAndSearchTodos}/>
      </section>
    </div>
  )
})

export default TodoPage;