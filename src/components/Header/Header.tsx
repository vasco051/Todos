import React, {FC} from 'react';
import './Header.css'
import Navbar from "../Navbar/Navbar";

const Header: FC = () => {
    return (
        <header className='header'>
            <div className='header-wrapper container'>
                <div className='header-title'>Todo List</div>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;