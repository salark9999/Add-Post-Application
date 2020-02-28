import React, {useContext} from 'react';
import Button from '../Button/Button';
import { ACTION_ADD, AppContext } from '../../App';
import { ListContext } from '../TodoList/TodoList';


import './NoItems.css';

const NoItems = props => {
    const appContext = useContext(AppContext);
    const listContext = useContext(ListContext);

    return (
        <li className="no-items">
            Brak elementów na liście<br />
            Dodaj nowy klikając <Button onClick={() => {
                appContext.handleChange(ACTION_ADD, listContext.list )
            }}>tutaj</Button>
        </li>
    );
};

NoItems.defaultProps = {};

export default NoItems;
