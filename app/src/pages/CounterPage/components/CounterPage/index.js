import React from 'react';
import { Link } from "react-router-dom";
import routes from "../../../../routes/routesNames";

import Counter from "../Counter";
import './styles.css';

const CounterPage = ({countValue, isEven, handleIncrement, handleDecrement, handleReset}) => {
    return (
        <div className='counter-page'>
            <h2>Counter Page</h2>

            <Link to={ routes.HOME }>
                <button className='btn_back'>
                    Go back
                </button>
            </Link>

            <div>
                <Counter countValue={countValue} isEven={isEven} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleReset={handleReset} />
            </div>
        </div>
    );
};

export default CounterPage;