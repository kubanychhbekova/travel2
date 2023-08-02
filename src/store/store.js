import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./reducer/reducer";
import userReducer from "./reducer/userSlice";

export const store = configureStore({

    reducer: {
        travel: todoSlice,
        user: userReducer,

    }
})
