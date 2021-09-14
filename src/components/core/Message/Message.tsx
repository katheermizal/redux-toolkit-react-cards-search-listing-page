import React from 'react';

import { MESSAGE, ERRORMESSAGE } from './Message.Styles';

export interface MessageProps {
    type: string;
    text: string;
};

const Message = (props:MessageProps) => {
    return (
        <>
            {
                props.type === 'ERROR' ? (
                    <ERRORMESSAGE>{ props.text }</ERRORMESSAGE>
                ) : (
                    <MESSAGE>{ props.text }</MESSAGE>
                )
            }
        </>
    );
};

export default Message;