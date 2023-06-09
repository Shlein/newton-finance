import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost, IPostListState} from "../types/postListTypes";

const initialState: IPostListState = {
    isPostListPageLoading: false,
    postList: [],
    favouritePostIdsList: [],
}

const postListSlice = createSlice({
    name: "postListSlice",
    initialState,
    reducers: {
        setPostList(state, {payload}: PayloadAction<IPost[]>) {
            state.postList = payload;
        },
        changePostFavouriteStatus(state, {payload}: PayloadAction<{postId: number, isFavourite: boolean}>) {
            const index = state.postList.findIndex(post => post.id === payload.postId);
            if (!payload.isFavourite) {
                state.favouritePostIdsList.push(payload.postId)
            } else {
                state.favouritePostIdsList = state.favouritePostIdsList?.filter(postId => postId !== payload.postId);
            }
            state.postList[index].isFavourite = !state.postList[index].isFavourite;
        },
        setIsPostListPageLoading(state, {payload}: PayloadAction<boolean>) {
            state.isPostListPageLoading = payload;
        }
    }
})

export const {
    setPostList,
    changePostFavouriteStatus,
    setIsPostListPageLoading,
} = postListSlice.actions

export default postListSlice.reducer