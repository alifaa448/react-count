import React, { useState, useCallback} from 'react';
import PropTypes from 'prop-types';

import './style';
import {useStyles} from "./style";

import CancelIcon from '@material-ui/icons/Cancel';
import { Typography, Box, Checkbox } from '@material-ui/core';

import DialogForm from "../../../../commonComponents/Dialogs";


const Todo = ({ todo, idx, handleDeleteTodo, handleEditTodo, isSelected, text, handleOpenModal, handleCloseModal, isOpen }) => {
    const classes = useStyles();
    const [isChecked, setChecked] = useState(false);

    const handleCheckState = useCallback((event) => {
        setChecked(event.target.checked)
    }, []);

    return (
        <Box className={classes.todoItem}>
            <Typography className={classes.hider} variant="body1" onDoubleClick={() => handleEditTodo(idx)}>
                <Checkbox
                    checked={isChecked}
                    onChange={handleCheckState}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <span className={isChecked ? classes.done : classes.undone}>{isSelected === idx ? text : todo }</span>
            </Typography>
            <CancelIcon onClick={handleOpenModal} />
            <DialogForm isOpen={isOpen} handleClose={handleCloseModal} handleDeleteTodo={handleDeleteTodo} idx={idx}/>
        </Box>
    );
};


Todo.propTypes = {
    todo: PropTypes.string,
    idx: PropTypes.number,
    handleDeleteTodo: PropTypes.func,
    handleEditTodo: PropTypes.func,
    handleOpenModal: PropTypes.func,
    handleCloseModal: PropTypes.func,
    isOpen: PropTypes.bool,
    text: PropTypes.string,
    selected: PropTypes.any
}

export default Todo;