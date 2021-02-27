import {composeWithDevTools} from "redux-devtools-extension";
import { createStore } from "redux";

import rootReducer from "./rootReducer";

const configureStore = () => {
    const store = createStore(rootReducer, composeWithDevTools());
    return store;
};

export default configureStore;