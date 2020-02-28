import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import { ACTION_ADD, AppContext } from '../../App';
import { ListContext } from '../TodoList/TodoList';
import './Header.css';

const Header = props => {
    const appContext = useContext(AppContext);
    const listContext = useContext(ListContext);

    return (
        <header className="header">
            <h2>{props.title}</h2>
            <div className="counter">
                {props.items}/{props.limit}
            </div>
            <div className="buttons">
                {
                    <Button
                        disabled={props.limit <= props.items}
                        onClick={() => {
                            appContext.handleChange(ACTION_ADD, listContext.list)
                        }}
                    >
                        +
                    </Button>
                }
            </div>
        </header>
    );
};

Header.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.number,
    limit: PropTypes.number,
};
Header.defaultProps = {};

export default Header;
