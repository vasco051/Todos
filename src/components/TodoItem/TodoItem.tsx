import React, {FC} from 'react';
import {ITodo} from "../../types/todo";
import {observer} from "mobx-react-lite";
import todoStore from "../../store/TodoStore";
import './TodoItem.css'
import useInput from "../../hooks/useInput";

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = observer(({todo}) => {
  const btnCompletedClasses: string[] = ['btn primary icon']
  btnCompletedClasses.push(todo.completed ? 'completed' : '')


  const [editTitle, setEditTitle, changeEditTitle] = useInput(todo.title)
  const [editBody, setEditBody, changeEditBody] = useInput(todo.body)

  const agreeEditTodo = () => {
    if (!editTitle) return
    todoStore.editTodo(todo.id, editTitle, editBody)
    todoStore.changeIdEditedTodo(null)
  }

  const refuseEditTodo = () => {
    todoStore.changeIdEditedTodo(null)
    setEditTitle(todo.title)
    setEditBody(todo.body)
  }

  return (
    <div className='todo'>
      {/*Content Todo*/}
      <div className="todo-content">
        <div className='todo-header'>
          <div className='todo-title'>
            {todoStore.idTodoEdit === todo.id
              ? <input type="text" value={editTitle} className='input' placeholder='Title...' onChange={changeEditTitle}/>
              : <h3>{todo.title}</h3>
            }
          </div>
          <div className='todo-time'>{todo.dateOfCreation.time}</div>
        </div>

        <div className="todo-body">
          {todoStore.idTodoEdit === todo.id
            ? <textarea value={editBody} className='textarea' placeholder='Description...' onChange={changeEditBody}/>
            : <p>{todo.body}</p>
          }
        </div>
      </div>

      {/*Buttons*/}
      <div className="todo-buttons">
        {todoStore.idTodoEdit === todo.id
          ?
          <>
            <button className='btn primary icon' onClick={agreeEditTodo}>&#10004;</button>
            <button className='btn danger icon' onClick={refuseEditTodo}>&#10006;</button>
          </>
          :
          <>
            <button className={btnCompletedClasses.join(' ')}
                    onClick={() => todoStore.checkedTodo(todo.id)}>&#9733;</button>
            <button className='btn primary icon' onClick={() => todoStore.changeIdEditedTodo(todo.id)}>&#9998;</button>
            <button className='btn danger icon' onClick={() => todoStore.removeTodo(todo.id)}>&#10006;</button>
          </>
        }
      </div>
    </div>
  );
});

export default TodoItem;