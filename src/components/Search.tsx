import React from 'react';
import SelectSort from "./SelectSort";
import {observer} from "mobx-react-lite";

const Search = observer(() => {
    return (
        <div>
            <SelectSort defaultValue='Search on' options={[
                {value: 'title', name: 'Search on title'},
                {value: 'body', name: 'Search on body'},
            ]
            }/>
        </div>
    );
});

export default Search;