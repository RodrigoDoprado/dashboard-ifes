import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./User"

export default configureStore({
    reducer:{
        auth: authReducer
    }
})