import { createAction } from 'redux-actions';

export const ADD_TEXT = createAction("ADD_TEXT");
export const ADD_TODO = createAction("ADD_TODO");
export const DELETE_TODO = createAction("DELETE_TODO");
export const DELETE_ALL = createAction("DELETE_ALL");
export const EDIT_TODO = createAction("EDIT_TODO");
export const EDIT_ADDED_TODO = createAction("EDIT_ADDED_TODO");
