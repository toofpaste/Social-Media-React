import React from "react";
import Status from "./YourProf";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'moment';

const Wrapper = styled.div`
height: 60rem;
background: linear-gradient(45deg, #BBB9B9,#F8F8F8);
opacity: 0.5;
    width: 100%;
    box-shadow: 5px 5px 20px;
`

function YourStatusList(props) {
    function formatTime(){
       let allStatusList = props.yourStatusList.slice();
       allStatusList.forEach((status) =>
       status.formattedWaitTime = status.time.fromNow(true)
       )
    }
    formatTime();
    return(
       <div>
            {props.yourStatusList.map((statuses)=>
                <Status names={statuses.names}
                        formattedWaitTime = {statuses.formattedWaitTime}
                        status={statuses.status}
                        key={statuses.id}/>
            )}
       </div>
    )
}

YourStatusList.propTypes = {
    yourStatusList: PropTypes.array
};

export default YourStatusList;
