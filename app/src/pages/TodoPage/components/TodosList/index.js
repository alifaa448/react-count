import React from 'react';

import Todo from "../Todo/index";

import './index.css';

const TodosList = ({ todos, handleDeleteTodo, handleEditTodo, selected, text }) => {
    return (
        <div className="todo__wrapper">
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} idx={index} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} selected={selected} text={text} />
            ))}
        </div>
    );
};

export default TodosList;