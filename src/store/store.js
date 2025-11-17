import { configureStore } from "@reduxjs/toolkit";
import checkAnimateReducer from '../features/checkAnimated/checkAnimatedSlice';

export const store=configureStore({
    reducer:{
        checkForAnimated: checkAnimateReducer,
    }
})