import React from "react";
import Status from "./YourProf";
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
height: 60rem;
background: linear-gradient(45deg, #000428,#004e92);
opacity: 0.5;
    width: 100%;
    box-shadow: 5px 5px 20px;
`

function YourStatusList(props) {
    console.log(props.yourStatusList);

    return(
       <div>
            {props.yourStatusList.map((statuses)=>
                <Status names={statuses.names}
                        time = {statuses.time}
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
