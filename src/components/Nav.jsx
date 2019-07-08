import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { flexbox, positions } from '@material-ui/system';
import Jerk1 from './assets/jerk1.jpeg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.div `
    height: 12em;
    color: white;
    font-size: 1.3em;
    background: linear-gradient(45deg, #000428,#004e92);
    display: flex;
    border-radius: 20px;
    align-items: flex-end;
    justify-content: space-around;
    box-shadow: 0 8px 6px -6px black;

`


const NavButton = styled.div`
    margin-bottom: .3rem;
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-left: 3rem;
    font-size: 1.5rem;
    font-weight: 150;
    text-transform: uppercase;
    color: white;
`
const TextAnimation = styled.a`
    transition: all .2s;
    border-top: 1px solid white;
        :hover {
            transform: scale(1.1);
        }
`

const TitleText = styled.h1`
    position: absolute;
    color: white;
    text-align: center;
    width: 100%;
    font-weight: 150;
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: 2rem;
`

var navImage = {
    borderRadius: "10px",
    width: "200px",
    height: '200px',
    border: '1px solid black',
    backgroundImage: `url(${Jerk1})`,
    backgroundSize: "cover",
    position: 'absolute',
    top: '10rem',
    marginLeft: '1.2rem'
}



const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),

    },
    Link: {
        color: 'white',
    },
    input: {
      display: 'none',
    },
  }));

export default (Nav) => {
    const classes = useStyles;
    return(
        <div>
        <TitleText>FootBook</TitleText>
        <NavWrapper>
            <NavButton>
                <TextAnimation><Link to="/">Home</Link></TextAnimation>
                <TextAnimation><Link to='/newstatus'>Profile</Link></TextAnimation>
                <TextAnimation><Link to="/newstatus">New</Link></TextAnimation>
            </NavButton>
            </NavWrapper>
        <div style={navImage}></div>
        </div>
    )
}