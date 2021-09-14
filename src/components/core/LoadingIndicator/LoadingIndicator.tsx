import React from 'react';
import Icons from '../Icons';

import { LOADER } from './LoadingIndicator.Styles';
import loadingIcon from '../../../assets/icons/loader.gif';

const LoadingIndicator = () => {
    return (
        <LOADER>
            <Icons 
                src={ loadingIcon }
                class={`loading_icon`}
                alt={`Loading Icon`}
            />
        </LOADER>
    );
};

export default LoadingIndicator;