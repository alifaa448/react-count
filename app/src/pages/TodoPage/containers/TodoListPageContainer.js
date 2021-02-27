import React, { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Container from '@material-ui/core/Container';

import {
    ADD_TEXT,
    ADD_TODO,
    DELETE_ALL,
    DELETE_TODO,
    EDIT_ADDED_TODO,
    EDIT_TODO, HIDE_MODAL,
    SHOW_MODAL
} from "../actions";

import TodosList from "../components/TodosList";
import InputField from "../components/InputField";

import {useStyles} from "./style";
import './style';

const TodoListPageContainer = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { todos, text, selected, checked, open } = useSelector((state) => state.todoPage);

    const handleInputChange = useCallback((event) => {
        dispatch(ADD_TEXT(event.target.value))
    }, [dispatch]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        if (selected || selected === 0)
            dispatch(EDIT_ADDED_TODO({value: text, selected: selected}))
        else if (text) dispatch(ADD_TODO(text));
    }, [text, selected, dispatch]);

    const handleDeleteTodo = useCallback((idx) => {
        dispatch(SHOW_MODAL());
        dispatch(DELETE_TODO(idx));
        dispatch(HIDE_MODAL());
    }, [dispatch]);

    const handleEditTodo = useCallback((idx) => {
        dispatch(EDIT_TODO(idx))
    }, [dispatch]);

    const handleDeleteAll = useCallback(() => {
        dispatch(DELETE_ALL())
    }, [dispatch]);

    const handleOpenModal = useCallback(() => {
        dispatch(SHOW_MODAL())
    }, [dispatch]);

    const handleCloseModal = useCallback(() => {
        dispatch(HIDE_MODAL())
    }, [dispatch]);


    return (
        <Container maxWidth="lg" className={classes.container}>
            <InputField text={text} handleInputChange={handleInputChange} handleSubmit={handleSubmit} handleDeleteAll={handleDeleteAll} />
            <TodosList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} selected={selected} text={text} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} open={open} />
        </Container>
    );
};

export default TodoListPageContainer;