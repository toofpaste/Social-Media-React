import React from 'react';
import NewStatusForm from "./NewStatus";
import PropTypes from "prop-types";
import styled from 'styled-components';


const Wrapper = styled.div`
height: 60rem;
background: linear-gradient(45deg, #BBB9B9,#F8F8F8);
    width: 100%;
    box-shadow: 5px 5px 20px;
`



class NewStatusControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);

    }

    handleTroubleshootingConfirmation(){
        this.setState({ formVisibleOnPage: true});
    }

    render() {
        let currentlyVisibleContent = null;
        if(this.state.formVisibleOnPage){
            currentlyVisibleContent = <NewStatusForm onNewStatusCreation={this.props.onNewStatusCreation}/>;
        } else {
            currentlyVisibleContent = <NewStatusForm onNewStatusCreation={this.props.onNewStatusCreation}/>;
        }
        return(
            <Wrapper>
                { currentlyVisibleContent }
            </Wrapper>
        );
    }
}
NewStatusControl.propTypes = {
    onNewStatusCreation: PropTypes.func
};



export default NewStatusControl;
