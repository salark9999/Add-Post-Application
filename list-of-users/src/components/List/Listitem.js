import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../Checkbox/Checkbox'
import Input from '../Input/Input'
import Button from '../Button/Button'

import { ACTION_DELETE, ACTION_EDIT, AppContext } from "../../App";
import { ListContext } from "../TodoList/TodoList";

const Listitem = props => {
    const appContext = useContext(AppContext);
    const listContext = useContext(ListContext);

    return (
        <li>
            <span>
                <Checkbox
                    checked={props.done}
                    onChange={e => {
                        appContext.handleChange(ACTION_EDIT, listContext.list, props.id, {
                            done: e.target.checked
                        });
                    }}
                />
            </span >
            <Input onChange={e => {
                appContext.handleChange(ACTION_EDIT, listContext.list, props.id, {
                    text: e.target.value
                });
            }}
                value={props.text}
                type="text"
            />
            <Button onClick={() => {
                appContext.handleChange(ACTION_DELETE, listContext.list, props.id)
            }}>🗑</Button>
        </li>
    );
};

Listitem.propTypes = {
    id: PropTypes.string,
    done: PropTypes.bool,
    text: PropTypes.string,
}

Listitem.defaultProps = {};

export default Listitem
