import React from 'react';
import moment from 'moment';
import Tags from '../Tags';

import { CARD } from './GlossaryCard.Styles';

export interface GlossaryCardProps {
    title?: string;
    description?: string;
    caseSensitive?: boolean;
    translatable?: boolean;
    forbidden?: boolean;
    createdAt?:  string;
    userName?: string;
	imageUrl?: string;
};

const GlossaryCard = (props: GlossaryCardProps) => {
    return (
        <CARD>
            <div className="title">
                <h2>{props.title}</h2>
            </div>
			<div className="image">
                <img src={props.imageUrl} alt={props.title} />
            </div>
            <div className="description">
                { props.description && (
                    <p>{props.description}</p>
                )}
            </div>
            <div className="bottom">
                <div className="tags">
                    { !props.translatable && <Tags type="GREY" text="Non-translatable" /> }
                    { props.caseSensitive && <Tags type="BLUE" text="CaseSensitive" /> }
                    { props.forbidden && <Tags type="RED" text="Forbidden" /> }
                </div>
                <p>
                    <span> { moment(props.createdAt).format('DD MMM, YYYY') }</span>
                    <span className="separator">•</span>
                    <span>{props.userName}</span>
                </p>
            </div>
        </CARD>
    );
};

export default GlossaryCard;