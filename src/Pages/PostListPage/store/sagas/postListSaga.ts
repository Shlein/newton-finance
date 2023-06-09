import {mainApi} from "../../../../api/mainApi";
import {takeLatest, put, call, select, SagaReturnType, all} from "redux-saga/effects"
import {setIsPostListPageLoading, setPostList} from "../slices/postListSlice";
import {getPostListSagaAction} from "./postListSagaActions";
import {IPost} from "../types/postListTypes";
import {getFavouritePostIdsList} from "../selectors/postListSelectors";

type PostListApiResponse = SagaReturnType<typeof mainApi.getAllPosts>

export function* getPostListSaga() {
    yield put(setIsPostListPageLoading(true));
    try {
        const response: PostListApiResponse = yield call(mainApi.getAllPosts);
        const favouritePostsIdsList: number[] = yield select(getFavouritePostIdsList);
        if (response.status === 200) {
            const postList: IPost[] = response.data.map(post => {
                const isExistsInIdsList = favouritePostsIdsList.findIndex(postId => postId === post.id);
                if (isExistsInIdsList >= 0) {
                    return {
                        ...post,
                        isFavourite: true,
                    }
                } else {
                    return {
                        ...post,
                        isFavourite: false,
                    }
                }
            })
            yield put(setPostList(postList));
        }
    } catch (e: any) {
        return e
    } finally {
        yield put(setIsPostListPageLoading(false));
    }
}

function* postListSaga() {
    yield all([
        takeLatest(getPostListSagaAction, getPostListSaga)
    ])
}

export default postListSaga