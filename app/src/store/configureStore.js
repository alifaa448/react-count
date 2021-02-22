import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import rootReducer from "./rootReducer";

const ConfigureStore = () => {
    const store = createStore(rootReducer, composeWithDevTools());

    return store;
};

export default ConfigureStore;