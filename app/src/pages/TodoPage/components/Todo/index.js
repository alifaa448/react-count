import React, { useState, useCallback} from 'react';

import './style';
import {useStyles} from "./style";

import CancelIcon from '@material-ui/icons/Cancel';
import { Typography, Box, Checkbox } from '@material-ui/core';

import DialogForm from "../../../../commonComponents/Dialogs";


const Todo = ({ todo, idx, handleDeleteTodo, handleEditTodo, selected, text, handleOpenModal, handleCloseModal, open }) => {
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
                <span className={isChecked ? classes.done : classes.undone}>{selected === idx ? text : todo }</span>
            </Typography>
            <CancelIcon onClick={handleOpenModal} />
            <DialogForm open={open} handleClose={handleCloseModal} handleDeleteTodo={handleDeleteTodo} idx={idx}/>
        </Box>
    );
};

export default Todo;