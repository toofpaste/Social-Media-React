import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Moment from 'moment';

const Wrapper = styled.div`
height: 60rem;
background: linear-gradient(45deg, #BBB9B9,#F8F8F8);
opacity: 0.5;
    width: 100%;
    box-shadow: 5px 5px 20px;
`
function Status(props) {
    return (
        <div>

            <h3>{props.formattedWaitTime} - {props.names}</h3>
            <p>{props.status}</p>

        </div>
    );
}

function displayTimeOpen(time) {
    return time.from(new Moment(), true);
  }

Status.propTypes = {
    names: PropTypes.string,
    formattedWaitTime: PropTypes.string.isRequired,
    status: PropTypes.string
};
export default Status;
