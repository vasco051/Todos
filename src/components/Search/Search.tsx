import React, {ChangeEvent, FC} from 'react';
import searchStore from "../../store/SearchAndSortStore";
import './Search.css'
import {observer} from "mobx-react-lite";


const Search: FC = observer(() => {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        searchStore.setSearchValue(e.target.value)
    }

    return (
        <input
            className='search-input'
            placeholder='Title search...'
            type="text"
            value={searchStore.searchValue}
            onChange={changeHandler}
        />
    );
});

export default Search;