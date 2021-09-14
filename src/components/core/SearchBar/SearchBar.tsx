import React from 'react';
import SearchInput from '../SearchInput';

import { SEARCHBAR } from './/SearchBar.Styles';

const SearchBar = (props:any) => {
    return (
        <SEARCHBAR>
            <SearchInput {...props} />
        </SEARCHBAR>
    );
};

export default SearchBar;