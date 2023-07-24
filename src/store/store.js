import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./reducer/reducer";
import userReducer from "./reducer/userSlice";
import reviewSlice from "./reducer/reviewSlice";

export const store = configureStore({
    reducer: {
        travel: todoSlice,
        user: userReducer,
        review: reviewSlice
    }
})