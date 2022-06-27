import React, {useContext} from 'react';
import styled from '@emotion/styled';
import ZoidsContext from '../ZoidsContext';

const AppInputField = styled.input`
    width: 100%;
    font-size: x-large;
    padding: 0.2rem;
`;

const WikiFilter = () => {
    const {search, setSearch} = useContext(ZoidsContext)

    return(
        <AppInputField
            value={search}
            onChange={(evnt) => setSearch(evnt.target.value)}
        />
    )
};

export default WikiFilter;