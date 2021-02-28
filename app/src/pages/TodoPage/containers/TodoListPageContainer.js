import React, { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import {
    ADD_TEXT,
    ADD_TODO,
    DELETE_ALL,
    DELETE_TODO,
    EDIT_ADDED_TODO,
    EDIT_TODO,
    HIDE_MODAL,
    SHOW_MODAL
} from "../actions";

import TodoListPageLayout from "../components/TodoListPageLayout";

const TodoListPageContainer = () => {
    const dispatch = useDispatch();

    const { todos, text, isSelected, isOpen } = useSelector((state) => state.todoPage);

    const handleInputChange = useCallback((event) => {
        dispatch(ADD_TEXT(event.target.value))
    }, [dispatch]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        if (isSelected || isSelected === 0)
            dispatch(EDIT_ADDED_TODO({value: text, selected: isSelected}))
        else if (text) dispatch(ADD_TODO(text));
    }, [text, isSelected, dispatch]);

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
        <TodoListPageLayout
            text={text}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            handleDeleteAll={handleDeleteAll}
            todos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            isSelected={isSelected}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            isOpen={isOpen}
        />
    );
};

export default TodoListPageContainer;