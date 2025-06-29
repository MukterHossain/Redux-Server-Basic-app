import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/counterSlice"
import taskReducer from "./feature/task/taskSlice";
import userReducer from "./feature/user/userSlice";
// import logger from "./feature/middlewares/logger";

const store = configureStore({
    reducer: {
        counter:counterReducer,
        todo: taskReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;