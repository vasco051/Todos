import React, {FC} from 'react';
import searchStore from "../store/SearchStore";
import {observer} from "mobx-react-lite";

interface option {
    value: string
    name: string
}

interface SearchProps {
    defaultValue: string
    options: option[]
}

const SelectSort: FC<SearchProps> = observer(({defaultValue, options}) => {
    return (
        <select
            value={searchStore.selectedSort}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                searchStore.setSelectedSort(event.target.value)
            }}>
            <option disabled>{defaultValue}</option>
            {options.map(option =>
                <option value={option.value} key={option.value}>{option.name}</option>
            )}
        </select>
    );
});

export default SelectSort;