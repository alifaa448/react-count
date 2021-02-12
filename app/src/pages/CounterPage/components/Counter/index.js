import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Counter = ({ countValue, isEven, handleIncrement, handleDecrement, handleReset }) => {

    return (
        <div>
            <div className='counter__value'>{ countValue }</div>
            <div style= { isEven ? { backgroundColor: '#202020' } : { backgroundColor: '#1b2062' } }  className='counter__text'>
                { isEven ? 'введено четное число' : 'введено нечетное число' }
            </div>
            <button className='button' onClick={ countValue > 0 ? handleDecrement : null }>-</button>
            <button className='button' onClick={ handleReset }>reset</button>
            <button className='button' onClick={ handleIncrement }>+</button>
        </div>
    );
};

Counter.propTypes = {
    countValue: PropTypes.number.isRequired,
    isEven: PropTypes.bool.isRequired,
    handleReset: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleIncrement: PropTypes.func.isRequired
};

export default Counter;