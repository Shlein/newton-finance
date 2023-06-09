export interface IPostListState {
    isPostListPageLoading: boolean,
    postList: IPost[],
    favouritePostIdsList: number[],
}

export interface IPostApiResponse {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string,
    isFavourite: boolean,
}

export interface IPostListApiResponse {
    status: number,
    data: IPostApiResponse[],
}