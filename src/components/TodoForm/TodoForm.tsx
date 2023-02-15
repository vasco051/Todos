import React, {FC, useState} from 'react';
import './TodoForm.css'
import {observer} from "mobx-react-lite";
import Form from "../Form/Form";
import MySelect from "../UI/select/MySelect";


const TodoForm: FC = observer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <section className='todo-form'>
      <button className='btn primary icon'
              onClick={() => setIsOpen(prev => !prev)}
      >{isOpen ? '-' : '+'}</button>

      {isOpen
        ? <Form setIsOpen={setIsOpen}/>
        : <MySelect defaultValue='Sort on' options={[
          {value: 'time', name: 'time'},
          {value: 'title', name: 'title'},
          {value: 'body', name: 'body'},
          {value: 'completed', name: 'Ready'},
          {value: 'uncompleted', name: 'Not ready'},
        ]}/>
      }
    </section>
  );
});

export default TodoForm;