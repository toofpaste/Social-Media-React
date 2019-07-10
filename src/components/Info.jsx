import React from 'react'
import styled from 'styled-components';


const Wrapper = styled.div`
height: 60rem;
background: linear-gradient(45deg, #BBB9B9,#F8F8F8);

opacity: 0.8;
    width: 100%;
    box-shadow: 5px 5px 20px;
`


export default (Info) => {
    return(
        <Wrapper>
            Info
        </Wrapper>
    )
}