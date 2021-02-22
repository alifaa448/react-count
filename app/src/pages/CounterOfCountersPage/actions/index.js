import { createAction } from 'redux-actions';

export const CREATE_COUNTER = createAction("CREATE_COUNTER");
export const RESET_COUNTERS = createAction("RESET_COUNTERS");
export const RESET_COUNTER = createAction("RESET_COUNTER");
export const INCREMENT_COUNTER = createAction("INCREMENT_COUNTER");
export const DECREMENT_COUNTER = createAction("DECREMENT_COUNTER");
export const REMOVE_COUNTER = createAction("REMOVE_COUNTER");