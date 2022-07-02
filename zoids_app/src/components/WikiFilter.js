import React from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

const AppInputField = styled.input`
    width: 100%;
    font-size: x-large;
    padding: 0.2rem;
`;

const WikiFilter = () => {
    const dispatch = useDispatch();
    const search = useSelector(state => state.search);

    return(
        <AppInputField
            value={search}
            onChange={(evnt) => dispatch({
                type: 'SET_SEARCH', 
                payload: evnt.target.value
            })}
        />
    )
};

export default WikiFilter;