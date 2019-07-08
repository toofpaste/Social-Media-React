import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';


const Wrapper = styled.div`
height: 60rem;
    background-color: green;
    width: 100%;
    box-shadow: 5px 5px 20px;
`
function Status(props) {
    return (
        <div>

            <h3>{props.time} - {props.names}</h3>
            <p>{props.status}</p>

        </div>
    );
}

Status.propTypes = {
    names: PropTypes.string,
    time: PropTypes.string,
    status: PropTypes.string
};
export default Status;
