import {RootState} from "../../../../redux/rootReducer";
import {IPost} from "../types/postListTypes";

export const getPostList = (state: RootState): IPost[] => {
    return state.postListReducer.postList
}

export const getFavouritePostIdsList = (state: RootState): number[] => {
    return state.postListReducer.favouritePostIdsList
}

export const getFavouritePostList = (state: RootState): IPost[] => {
    return state.postListReducer.postList.filter(post => post.isFavourite)
}

export const getIsPostListPageLoading = (state: RootState): boolean => {
    return state.postListReducer.isPostListPageLoading
}