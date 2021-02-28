import { handleActions } from "redux-actions";

import * as actions from '../actions';

const defaultState = {
    todos: [],
    text: '',
    isSelected: undefined,
    isOpen: false
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
                isSelected: payload
            }
        },
        [actions.EDIT_ADDED_TODO]: (state, {payload}) => {
            return {
                ...state,
                todos: state.todos.map((todo, index) => index !== payload.selected ? todo : payload.value),
                isSelected: undefined,
                text: ''
            }
        },
        [actions.DELETE_ALL]: () => defaultState,
        [actions.SHOW_MODAL]: (state) => {
            return {
                ...state,
                isOpen: true
            }
        },
        [actions.HIDE_MODAL]: (state) => {
            return {
                ...state,
                isOpen: false
            }
        }
}
, defaultState);

export default TodoReducer;