import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { v4 } from 'uuid';
import YourStatusList from './YourStatusList';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
height: 60rem;
    background-color: green;
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
        let today = new Date();
        let hours = parseInt(today.getHours());
        let date = (today.getMonth()+1)+'/'+today.getDate() +'/' +today.getFullYear();
        if(hours > 12){
            hours -= 12;
        }
        let time =" at " + hours + ":" + today.getMinutes();
        let dateTime = date+' '+time;
        let currentTime = dateTime.toString();
        props.onNewStatusCreation({names:_names.value, time:currentTime, status: _status.value, id: v4() });
        allStat.push({names:_names.value, time:currentTime, status: _status.value, id: v4() });
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