import React from 'react';

import './index.css';

const Todo = ({ todo, idx, handleDeleteTodo, handleEditTodo, selected, text }) => {
    return (
        <div className="todo__item">
            <div onClick={() => handleEditTodo(idx)}>
                {selected === idx ? text : todo }
            </div>
            <div className="todo__closer" onClick={() => handleDeleteTodo(idx)}>x</div>
        </div>
    );
};

export default Todo;