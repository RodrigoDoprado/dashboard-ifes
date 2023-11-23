import { combineReducers, createStore } from "redux";
import layoutReducer from "./layout";

const rootReducer = combineReducers({
    layout: layoutReducer
})

export default createStore(rootReducer)