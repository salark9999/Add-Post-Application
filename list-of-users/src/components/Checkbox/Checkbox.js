import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
    return (
        <input type="checkbox" {...props} />
    )
}

Checkbox.propTypes = {

};
Checkbox.defaultProps = {};

export default Checkbox

