import React, {FC, useState} from 'react';
import useInput from "../../hooks/useInput";
import {ITodo} from "../../types/todo";
import todoStore from "../../store/TodoStore";
import './TodoForm.css'
import SelectSort from "../SelectSort";


const TodoForm: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)


    const [title, setTitle, changeTitle] = useInput('')
    const [body, setBody, changeBody] = useInput('')

    const addPost = () => {
        if (!title) {
            return console.log('Введите заголовок')
        }

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
        <div className='form box'>
            <button className='btn primary icon' onClick={() => setIsOpen(prev => !prev)}>{isOpen ? '-' : '+'}</button>
            {isOpen &&
              <div className="form-wrapper">
                <div className="form-inputs">
                  <input
                    className='form-input'
                    type="text"
                    value={title}
                    placeholder='Task title'
                    onChange={changeTitle}
                  />
                  <div className="border"></div>
                  <textarea
                    className='form-input'
                    value={body}
                    placeholder='Description...'
                    onChange={changeBody}
                  />
                </div>
                <button className='btn primary form-button' onClick={addPost}>Add</button>
              </div>
            }
            {!isOpen &&
              <>
                  <SelectSort defaultValue='sorted' options={[
                      {value: '', name: 'all'},
                      {value: 'complied', name: 'Complied'},
                      {value: 'unComplied', name: 'Un complied'},
                  ]}/>
              </>
            }
        </div>
    );
};

export default TodoForm;