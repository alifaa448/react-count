import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Counter = ({countValue, isEven, handleIncrement, handleDecrement, handleReset, handleRemove}) => {

    return (
        <div className='counter'>
            <div className='counter__value'>{ countValue }</div>
            <div style= { isEven ? { backgroundColor: '#202020' } : { backgroundColor: '#1b2062' } }  className='counter__text'>
                { isEven ? 'even number' : 'odd number' }
            </div>
            <button className='button' onClick={ handleDecrement }>-</button>
            <button className='button button_green' onClick={ handleReset }>reset</button>
            <button className='button' onClick={ handleIncrement }>+</button>
            <button className='button button_red' onClick={ handleRemove }>Remove</button>
        </div>
    );
};

Counter.propTypes = {
    countValue: PropTypes.number,
    isEven: PropTypes.bool,
    handleReset: PropTypes.func,
    handleDecrement: PropTypes.func,
    handleIncrement: PropTypes.func,
};

export default Counter;