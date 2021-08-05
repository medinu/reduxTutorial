import { createStore, combineReducers  } from "redux";
import { todosReducer } from "./reducers";

const reducers = { todos: todosReducer };

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);