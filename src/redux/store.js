// import {combineReducers,applyMiddleware} from "redux"
import {configureStore} from "@reduxjs/toolkit"
// import thunk from "redux-thunk";

import { userReducer } from "./userreducer";

const store = configureStore({
    reducer:{

        user:userReducer
    },
});

export default store 