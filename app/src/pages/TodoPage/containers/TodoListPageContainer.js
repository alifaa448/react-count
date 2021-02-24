import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import './index.css';

import {ADD_TEXT, ADD_TODO, DELETE_ALL, DELETE_TODO, EDIT_ADDED_TODO, EDIT_TODO} from "../actions";

import TodosList from "../components/TodosList";
import InputField from "../components/InputField";

const TodoListPageContainer = () => {
    const dispatch = useDispatch();

    const { todos, text, selected } = useSelector((state) => state.todoPage);

    const handleInputChange = useCallback((event) => {
        dispatch(ADD_TEXT(event.target.value))
    }, [dispatch]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        if (selected || selected === 0)
            dispatch(EDIT_ADDED_TODO({value: text, selected: selected}))
        else dispatch(ADD_TODO(text));
    }, [text, selected, dispatch]);

    const handleDeleteTodo = useCallback((idx) => {
        dispatch(DELETE_TODO(idx))
    }, [dispatch]);

    const handleEditTodo = useCallback((idx) => {
        dispatch(EDIT_TODO(idx))
    }, [dispatch]);

    const handleDeleteAll = useCallback(() => {
        dispatch(DELETE_ALL())
    }, [dispatch]);

    return (
        <div className='todo__container'>
            <h1 className="todo__title">Todos App</h1>
            <InputField text={text} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            <TodosList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} selected={selected} text={text} />
            <div>
                <button onClick={handleDeleteAll} className="btn btn_red">Delete All</button>
            </div>
        </div>
    );
};

export default TodoListPageContainer;