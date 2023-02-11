import React, {FC, useState} from 'react';
import './TodoForm.css'
import {observer} from "mobx-react-lite";
import Search from "../Search/Search";
import Form from "../Form/Form";
import MySelect from "../UI/select/MySelect";


const TodoForm: FC = observer(() => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <section className='form-todo box'>
            <button className='btn primary icon' onClick={() => setIsOpen(prev => !prev)}>{isOpen ? '-' : '+'}</button>
            {isOpen && <Form setIsOpen={setIsOpen}/>}
            {!isOpen &&
                <>
                  <Search/>
                  <MySelect defaultValue='Sort on' options={[
                      {value: 'time', name: 'Time'},
                      {value: 'title', name: 'Title'},
                      {value: 'body', name: 'Text'},
                      {value: 'completed', name: 'Ready'},
                      {value: 'uncompleted', name: 'Not ready'},
                  ]}/>
                </>
            }
        </section>
    );
});

export default TodoForm;