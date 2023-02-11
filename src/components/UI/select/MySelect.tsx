import React, {ChangeEvent, FC} from 'react';
import searchStore from "../../../store/SearchAndSortStore";
import {observer} from "mobx-react-lite";
import './MySelect.css'

interface option {
    value: string
    name: string
}

interface MySelectProps {
    defaultValue: string
    options: option[]
}

const MySelect: FC<MySelectProps> = observer(({defaultValue, options}) => {
    return (
        <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                searchStore.setSelectSort(e.target.value)
            }
            value={searchStore.selectSort}
            className='my-select'
        >
            <option disabled value="" className='my-option'>{defaultValue}</option>
            {
                options.map(option =>
                    <option value={option.value} className='my-option' key={option.value}>
                        {option.name}
                    </option>
                )}
        </select>
    );
});

export default MySelect;