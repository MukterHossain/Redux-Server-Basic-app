import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMidleware) => 
        getDefaultMidleware().concat(baseApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;