import React from 'react';
import Nav from './Nav';
import Info from './Info';
import Friends from './Friends'
import Status from './Status'
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 
    grid-gap: 1.5rem;
    margin-top: 9rem;
    justify-items: center;
`

export default (App) => {
    return(
        <div>
             <Nav/>
             <Grid>
                <Info/>
                <Status/>
                <Friends/>
             </Grid>
        </div>
       
    )
}

