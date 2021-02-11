import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Counter = (props) => {

    return (
        <div>
            <div className='counter__value'>{ props.countValue }</div>
            <div style= { props.handleColor() }  className='counter__text'>
                { props.handleIsEven() }
            </div>
            <button className='button' onClick={ props.handleDecrement }>-</button>
            <button className='button' onClick={ props.handleReset }>reset</button>
            <button className='button' onClick={ props.handleIncrement }>+</button>
        </div>
    );
};

Counter.propTypes = {
    countValue: PropTypes.number.isRequired,
    isEven: PropTypes.bool.isRequired,
    handleReset: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleIncrement: PropTypes.func.isRequired,
    handleIsEven: PropTypes.func.isRequired,
    handleColor: PropTypes.func.isRequired
};

export default Counter;