import React from 'react';
import styled from '@emotion/styled';

const QuoteContainer = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:800px;
`;

const Quote = ({quote}) => {
    return(
        <QuoteContainer> 
            <h1>{quote.quote}</h1>
            <p>{quote.author}</p>
        </QuoteContainer>
    );
}

export default Quote;