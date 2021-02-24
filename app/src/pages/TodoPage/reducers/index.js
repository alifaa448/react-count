import { handleActions } from "redux-actions";

import * as actions from '../actions';

const defaultState = {
    todos: [],
    text: '',
    selected: undefined
};

const TodoReducer = handleActions({
        [actions.ADD_TEXT]: (state, {payload}) => {
            return {
                ...state,
                text: payload
            }
        },
        [actions.ADD_TODO]: (state, {payload}) => {
            return {
                ...state,
                todos: [...state.todos, payload],
                text: ""
            }
        },
        [actions.DELETE_TODO]: (state, {payload}) => {
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== payload)
            }
        },
        [actions.EDIT_TODO]: (state, {payload}) => {
            return {
                ...state,
                text: state.todos[payload],
                selected: payload
            }
        },
        [actions.EDIT_ADDED_TODO]: (state, {payload}) => {
            return {
                ...state,
                todos: state.todos.map((todo, index) => index !== payload.selected ? todo : payload.value),
                selected: undefined,
                text: ''
            }
        },
        [actions.DELETE_ALL]: () => defaultState
    }
, defaultState);

export default TodoReducer;