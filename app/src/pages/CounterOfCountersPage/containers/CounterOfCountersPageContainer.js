import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import CounterOfCountersPage from "../components/CounterOfCountersPage";
import {
    CREATE_COUNTER,
    RESET_COUNTERS,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    REMOVE_COUNTER,
    RESET_COUNTER
} from "../actions";

const CounterOfCountersPageContainer = () => {

    const dispatch = useDispatch();
    const { counters, summary } = useSelector((state) => state.counterPage);

    const handleCreateCounter = useCallback(() => {
        dispatch(CREATE_COUNTER())
    }, [dispatch]);

    const handleResetCounters = useCallback(() => {
        dispatch(RESET_COUNTERS())
    }, [dispatch]);

    const handleIncrementCounter = useCallback((index) => {
        dispatch(INCREMENT_COUNTER(index))
    }, [dispatch]);

    const handleDecrementCounter = useCallback((index) => {
        const currentValue = counters[index].countValue;

        if (currentValue > 0) {
            dispatch(DECREMENT_COUNTER(index));
        }
    }, [dispatch, counters]);

    const handleRemoveCounter = useCallback((index) => {
        dispatch(REMOVE_COUNTER(index))
    }, [dispatch, counters]);

    const handleResetCounter = useCallback((index) => {
        dispatch(RESET_COUNTER(index))
    }, [dispatch, counters]);

    const countersSummary = useMemo(() => {
        return counters.reduce((sum, item) => sum + item.countValue, 0);
    }, [counters]);

    return (
        <CounterOfCountersPage
            handleCreateCounter={handleCreateCounter}
            handleResetCounters={handleResetCounters}
            counters={counters}
            handleIncrementCounter={handleIncrementCounter}
            handleDecrementCounter={handleDecrementCounter}
            handleRemoveCounter={handleRemoveCounter}
            handleResetCounter={handleResetCounter}
            summary={countersSummary}
        />
    );
}

export default CounterOfCountersPageContainer;