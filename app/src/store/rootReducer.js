//Объединяет все редьюсеры нашего проекта и передает в объект
import { combineReducers } from "redux";

import counterPage from '../pages/CounterOfCountersPage/reducers';

const rootReducer = combineReducers({ counterPage });
export default rootReducer;