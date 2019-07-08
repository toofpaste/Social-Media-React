import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 60rem;
    background-color: blue;
    width: 100%;
    box-shadow: 5px 5px 20px;
`


export default (Friends) => {
    return(
        <Wrapper>
            Friends
        </Wrapper>
    )
}