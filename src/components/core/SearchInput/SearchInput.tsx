import React from 'react';
import Icons from '../Icons';

import { FIELD } from './SearchInput.Styles';
import closeIcon from '../../../assets/icons/close.png';

// eslint-disable-next-line
const SearchInput = (props:any) => {
    return (
        <FIELD>
            <input 
                type="text"
                placeholder="Search..."
                onChange={props.handleChange}
                value={props.initialValue}
            />
            { props.initialValue !== '' && (
                <div className={`close_icon`}  onClick={props.resetField} >
                    <Icons  src={closeIcon} alt={`Close Icon`} />
                </div>
            )}
        </FIELD>
    );
};

export default SearchInput;