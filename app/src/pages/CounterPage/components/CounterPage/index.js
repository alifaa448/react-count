import React from 'react';
import { Link } from "react-router-dom";
import routes from "../../../../routes/RoutesNames";

import Counter from "../Counter";
import './styles.css';

const CounterPage = (props) => {
    return (
        <div className='counter-page'>
            <h2>Counter Page</h2>

            <Link to={ routes.home }>
                <button className='btn_back'>
                    Go back
                </button>
            </Link>

            <div className='counter'>
                <Counter countValue={ props.countValue } isEven={ props.isEven } handleIncrement={ props.handleIncrement } handleDecrement={ props.handleDecrement } handleReset={ props.handleReset } handleColor={ props.handleColor } handleIsEven={ props.handleIsEven } />
            </div>
        </div>
    );
};

export default CounterPage;