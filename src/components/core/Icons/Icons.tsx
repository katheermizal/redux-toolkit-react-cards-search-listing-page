import React from 'react';

export interface IconsProps {
    src?: string;
    alt?: string;
    class?: string;
}

const Icons = (props: IconsProps) => {
    return (
        props.class ? (
            <div className={props.class} >
                <img src={props.src} alt={props.alt} />
            </div>
        ): <img src={props.src} alt={props.alt} />
    );
};

export default Icons;