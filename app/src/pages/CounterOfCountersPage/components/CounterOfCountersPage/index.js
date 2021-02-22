import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import './index.css';

import Counter from "../../../CounterPage/components/Counter";

const CounterOfCountersPage = ({ handleCreateCounter, handleResetCounters, counters, handleIncrementCounter, handleDecrementCounter, handleRemoveCounter, handleResetCounter, summary }) => {

    return (
        <div>
            <div className='counters__sum'>
                Summary: {summary}
            </div>
            <div className='counters__quantity'>
                Number of counters: {counters.length}
            </div>
            <div className='counter__page'>
                <button className='btn btn_red' onClick={handleCreateCounter}>Add Counter</button>
                <button className='btn btn_blue' onClick={handleResetCounters}>Reset</button>
            </div>
            <div className="counter__area" >
                {counters.map(({ countValue, isEven }, index) => (
                    <div>
                        <Counter
                            key={uuidv4()}
                            countValue={countValue}
                            isEven={isEven}
                            handleIncrement={() => handleIncrementCounter(index)}
                            handleDecrement={() => handleDecrementCounter(index)}
                            handleReset={() => handleResetCounter(index)}
                            handleRemove={() => handleRemoveCounter(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

CounterOfCountersPage.propTypes = {
    countersArray: PropTypes.arrayOf(PropTypes.shape({
        counterValue: PropTypes.number,
        isEven: PropTypes.bool
    }))
}

export default CounterOfCountersPage;