import axiosInstance from "./axiosConfig";
import {IPostListApiResponse} from "../Pages/PostListPage/store/types/postListTypes";

// базовый url оканчивается не на "/"
const postsUrl = "/posts/";

export const mainApi = {
    async getAllPosts(): Promise<IPostListApiResponse> {
        try {
            return await axiosInstance.get(postsUrl);
        } catch (e: any) {
            return e
        }
    },
}