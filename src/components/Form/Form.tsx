import React, {FC, MouseEvent} from 'react';
import './Form.css'
import useInput from "../../hooks/useInput";
import {ITodo} from "../../types/todo";
import todoStore from "../../store/TodoStore";
import {observer} from "mobx-react-lite";

interface FormProps {
  setIsOpen: (isOpen: boolean) => void
}

const Form: FC<FormProps> = observer(({setIsOpen}) => {
  const [title, setTitle, changeTitle] = useInput('')
  const [body, setBody, changeBody] = useInput('')

  const addPost = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!title) return console.log('Введите заголовок')

    let fullDate = new Date()
    const [date, time] = fullDate.toLocaleString().split(', ')

    const todo: ITodo = {
      id: Date.now(),
      title: title,
      body: body,
      dateOfCreation: {time, date},
      completed: false
    }

    todoStore.addTodo(todo)
    setIsOpen(false)
    setTitle('')
    setBody('')
  }

  return (
    <form className="form">
      <div className="form-inputs">
        <input
          className='form-input'
          type="text"
          value={title}
          placeholder='Todo title...'
          onChange={changeTitle}
        />
        <div className="form-border"></div>
        <textarea
          className='form-input'
          value={body}
          placeholder='Description...'
          onChange={changeBody}
        />
      </div>
      <button className='btn primary form-button' onClick={addPost}>Add</button>
    </form>
  );
});

export default Form;