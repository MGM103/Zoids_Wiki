import React, {useContext} from 'react';
import styled from '@emotion/styled';
import ZoidsContext from '../ZoidsContext';

const AppInputField = styled.input`
    width: 100%;
    font-size: x-large;
    padding: 0.2rem;
`;

const WikiFilter = () => {
    const {
        state: {search}, 
        dispatch
    } = useContext(ZoidsContext);

    return(
        <AppInputField
            value={search}
            onChange={(evnt) => dispatch({
                action: 'SET_SEARCH', 
                payload: evnt.target.value
            })}
        />
    )
};

export default WikiFilter;