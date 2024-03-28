import { combineReducers, createStore } from "redux";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers(
    {
        menuReducer: menuReducer,
    })
export const store = createStore(rootReducer);
