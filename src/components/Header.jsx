import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>

            <h1>Your Statuses</h1>
            <Link to="/">Home</Link> | <Link to="/newstatus">Create Status</Link>

        </div>
    )
}

export default Header;
