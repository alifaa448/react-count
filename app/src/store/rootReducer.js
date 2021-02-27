import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from 'redux-persist/lib/storage';
import counterPage from '../pages/CounterOfCountersPage/reducers';
import todoPage from '../pages/TodoPage/reducers';

const persistConfig = {
    key: "root",
    storage
};

const rootReducer = combineReducers({ counterPage, todoPage });

export default persistReducer(persistConfig, rootReducer);