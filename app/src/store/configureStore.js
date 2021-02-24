import {composeWithDevTools} from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import { createStore } from "redux";

import persistedReducer from "./rootReducer";

const ConfigureStore = () => {
    const store = createStore(persistedReducer, composeWithDevTools());
    const persistor = persistStore(store);
    return { store, persistor };
};

export default ConfigureStore;