import React from 'react'
import PropTypes from 'prop-types'

import './Button.css';

const Button = (props) => {
    return (
        <button className={`guzik ${props.className}`} disabled={props.disabled} onClick={props.onClick}>{props.children}</button>
    );
};

Button.propTypes = {
    disabled: PropTypes.bool,
    className:PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
};
Button.defaultProps = {
    className: ''
};
   

export default Button;