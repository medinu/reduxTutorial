import { createStore, combineReducers  } from "redux";
import { todosReducer } from "./reducers";


// for persisted reducer
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";


const reducers = { todos: todosReducer };

const rootReducer = combineReducers(reducers);

const persistConfig = {
    key: 'root',
    storage, 
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    );