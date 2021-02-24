import React from 'react';

import "./index.css";

const InputField = ( { text, handleInputChange, handleSubmit }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button className="btn btn_blue" type="submit">Add todo</button>
            </div>
            <input value={text} className="todo__input" type="text" name="todo" placeholder="Enter smth..." onChange={handleInputChange} />
        </form>
    );
};

export default InputField;