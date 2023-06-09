import {combineReducers} from '@reduxjs/toolkit'
import postListSlice from "../Pages/PostListPage/store/slices/postListSlice";

export const rootReducer = combineReducers({
    postListReducer: postListSlice,
})

export type RootState = ReturnType<typeof rootReducer>