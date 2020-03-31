import React from 'react';

import './search-box.styles.css';


export const SearchBox = props => (
    <input 
        type='search' 
        className='search-box'
        placeholder= 'search monsters' 
        onChange={props.onSearchChange}
        />
);