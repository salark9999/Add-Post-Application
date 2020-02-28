import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './AppHeader.css';

const AppHeader = props => {
    return (
        <header className="title">
            <h1>List of Users</h1>
            <nav>
                <h3>
                    <span>
                        <Link to="/">My todos</Link>&nbsp;&nbsp;&nbsp;
                        <Link to="/about">About App</Link>
                    </span>
                </h3>
            </nav>
        </header>
    );
};

AppHeader.propTypes = {};
AppHeader.defaultProps = {};

export default AppHeader;