import React from 'react';
import PropTypes from 'prop-types';

import Listitem from './Listitem';
import NoItems from './NoItems';
import './List.css';


const List = props => {
    return (
        <ul className="list">
            {props.items.length === 0 && <NoItems></NoItems>}
            {props.items.map(item => (
                <Listitem
                    key={item.id}
                    {...item}
                />
            ))}
        </ul>
    );
};

List.propTypes = {
    items: PropTypes.array,
}
List.defaultProps = {};

export default List;
