import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './style';
import {useStyles} from "./style";

import { Container } from '@material-ui/core';

import Todo from "../Todo/index";

const TodosList = ({ todos, handleDeleteTodo, handleEditTodo, selected, text, handleOpenModal, handleCloseModal, open }) => {
    const classes = useStyles();
    return (
        <Container className={classes.wrapper}>
            {todos.map((todo, index) => (
                <Todo key={uuidv4()}
                      todo={todo}
                      idx={index}
                      handleDeleteTodo={handleDeleteTodo}
                      handleEditTodo={handleEditTodo}
                      selected={selected}
                      text={text}
                      handleOpenModal={handleOpenModal}
                      handleCloseModal={handleCloseModal}
                      open={open}
                />
            ))}
        </Container>
    );
};

export default TodosList;