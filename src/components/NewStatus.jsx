import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { v4 } from 'uuid';
import YourStatusList from './YourStatusList';
import styled from 'styled-components';
import Moment from 'moment';

const Wrapper = styled.div`
height: 60rem;
border-radius: 5px;
background: linear-gradient(45deg, #BBB9B9,#F8F8F8);
    width: 100%;
    box-shadow: 5px 5px 20px;
`

const allStat = [];

function NewStatus(props) {   

    // const [isFilled, setFilled] = useState(false);

    let _names = null;
    let _status = null;
    let currentlyVisibleContent = null;

    function handleNewStatusSubmission(event) {
        event.preventDefault();
        props.onNewStatusCreation({names:_names.value, time:new Moment, status: _status.value, id: v4() });
        allStat.push({names:_names.value, time: new Moment(), status: _status.value, id: v4() });
        _names.value = '';
        _status.value = '';       
        // setFilled(true);
    }
    if(allStat.length >= 1){
        currentlyVisibleContent = <YourStatusList yourStatusList={allStat}/>
    } else {
        currentlyVisibleContent = <p>No Previous Statuses to show</p>
    }
    
    return(


        <Wrapper>

            <form onSubmit={handleNewStatusSubmission}>
                <input
                    type='text'
                    id='names'
                    placeholder='Your Name'
                    ref={(input) => {_names = input;}}/>
                <textarea
                    id='status'
                    placeholder='New Status'
                    ref={(textarea) => {_status = textarea;}}/>

                <button type='submit'>Submit!</button>
            </form>
            {currentlyVisibleContent}
        </Wrapper>
    )
}

NewStatus.propTypes = {
    onNewStatusCreation: PropTypes.func
};


export default NewStatus;
