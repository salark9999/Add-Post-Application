import React from 'react'
import PropTypes from 'prop-types'

import './input.css';
   
const Input = (props) => {
    return (
        <input className="input" value={props.value} onChange={props.onChange} type="text" />
    );
};
Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
   };
   
Input.defaultProps = {};
   
export default Input;