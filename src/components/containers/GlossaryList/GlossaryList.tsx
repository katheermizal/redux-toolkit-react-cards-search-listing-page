import React, { useState } from 'react';
import SearchBar from '../../core/SearchBar';
import GlossaryCard from '../../core/GlossaryCard';
import LoadingIndicator from '../../core/LoadingIndicator';
import Message from '../../core/Message';

import { MAIN, GRID } from './GlossaryList.Styles';
import { useGetCardsQuery } from '../../../services/GlossaryCards';

const GlossaryList = () => {
    const [inputValue, setInputValue] = useState('');
    const { data, isLoading, isSuccess, isError } = useGetCardsQuery(inputValue);

    const onInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    const onResetField = () => {
        setInputValue('');
    };

    return (
        <MAIN>
            <SearchBar handleChange={onInputChange} resetField={onResetField} initialValue={inputValue} />           
            { isError && <Message type={`ERROR`} text={`Oh no, there was an error`} /> }
            { isLoading && <LoadingIndicator /> }
            { isSuccess && (
                <GRID>
                    {
                        data 
                        && data.map((card:any) => {
                            return (
                                <GlossaryCard
                                    key={card.id}
                                    title={card.title}
                                    description={card.description}
                                    caseSensitive={card.caseSensitive}
                                    translatable={card.translatable}
                                    forbidden={card.forbidden}
                                    createdAt={card.createdAt}
                                    userName={card.createdBy.fullName}
									imageUrl={card.imgURl}
                                />
                            );
                        })
                    }
                </GRID>
            )}
        </MAIN>
    );
};

export default GlossaryList;