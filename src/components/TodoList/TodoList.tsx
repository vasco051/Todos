import React, {FC} from 'react';
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css'
import {ITodo} from "../../types/todo";
import {observer} from "mobx-react-lite";
import TodoForm from "../TodoForm/TodoForm";


interface TodoListProps {
  todos: ITodo[]
}

const TodoList: FC<TodoListProps> = observer(({todos}) => {
  return (
    <section className='todo-list'>
      {todos.length
        ? todos.map(todo =>
          <TodoItem todo={todo} key={todo.id}/>
        )
        : <h2 className='todo-list-title'>Nothing found</h2>
      }
    </section>
  );
});

export default TodoList;