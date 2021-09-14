import React from 'react';

import { BLUEBUTTON, BUTTON, GREYBUTTON, REDBUTTON } from './Tags.Styles';

export interface TagsProps {
    type: string;
    text: string;
};

const Tags = (props:TagsProps) => {
    return (
        <>
            {
                props.type === 'RED' ? (
                    <REDBUTTON>{ props.text }</REDBUTTON>
                ) :
                props.type === 'BLUE' ? (
                    <BLUEBUTTON>{ props.text }</BLUEBUTTON>
                ) :
                props.type === 'GREY' ? (
                    <GREYBUTTON>{ props.text }</GREYBUTTON>
                ) : (
                    <BUTTON>{ props.text }</BUTTON>
                )
            }
        </>
    );
};

export default Tags;