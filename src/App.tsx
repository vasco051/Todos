import React, {FC} from 'react';
import TodoPage from "./pages/TodoPage";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import {observer} from "mobx-react-lite";


const App: FC = observer(() => {
    return (
        <BrowserRouter>
            <Header/>
            <main className='container'>
                <Routes>
                    <Route path='/' element={<TodoPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='*' element={<TodoPage/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
});

export default App;