import {combineActions, handleActions} from 'redux-actions';

import * as actions from '../actions';
import {CREATE_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER, REMOVE_COUNTER} from "../actions";

const defaultState = {
    counters: [],
    summary: 0
};

const counterReducer = handleActions({
    [actions.CREATE_COUNTER]: (state) => {
        const updateCounters = state.counters.map((counter) => {
            return {
                ...counter,
                countValue: counter.countValue % 2 === 0 ? counter.countValue + 1 : counter.countValue
            }
        });

        const newCounter = {
            countValue: 0,
            isEven: true
        };

        return {
            counters: [...updateCounters, newCounter]
        }
    },
    [actions.RESET_COUNTERS]: () => defaultState,
    [actions.INCREMENT_COUNTER]: (state, { payload }) => {
        const copyCounters = [...state.counters];
        copyCounters[payload].countValue = copyCounters[payload].countValue + 1;
        return {
            ...state,
            counters: copyCounters
        }
    },
    [actions.DECREMENT_COUNTER]: (state, { payload }) => {
        const copyCounters = [...state.counters];
        copyCounters[payload].countValue = copyCounters[payload].countValue - 1;
        return {
            ...state,
            counters: copyCounters
        }
    },
    [actions.REMOVE_COUNTER]: (state, { payload }) => {
        const updateCounters = state.counters.map((counter) => {
            return {
                ...counter,
                countValue: counter.countValue % 2 !== 0 ? counter.countValue - 1 : counter.countValue
            }
        });
        updateCounters.splice(payload, 1);
        return {
            ...state,
            counters: updateCounters
        }
    },
    [actions.RESET_COUNTER]: (state, {payload}) => {
        const copyCounters = [...state.counters];
        copyCounters[payload].countValue = 0;
        copyCounters[payload].isEven = copyCounters[payload].countValue % 2 === 0;
        return {
            ...state,
            counters: copyCounters
        }
    },
    [combineActions(CREATE_COUNTER,INCREMENT_COUNTER, DECREMENT_COUNTER, REMOVE_COUNTER)]: (state) => {
        const { counters, summary } = state.counters.reduce((result, counter) => {
            const { countValue } = counter;

            const newCounter = {
                countValue: countValue,
                isEven: countValue % 2 === 0
            }
            result.counters.push(newCounter);
            result.summary += countValue;

            return result;
        }, {counters: [], summary: 0});
        return {
            ...state,
            counters,
            summary
        }
    }
}, defaultState);

export default  counterReducer;