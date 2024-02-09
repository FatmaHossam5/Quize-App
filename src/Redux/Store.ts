import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./Slices/AuthSlice/AuthSlice";

const store =configureStore({
    reducer:{
        userData:authReducer
    }
});

export default store;
