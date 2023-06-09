import {all, fork} from 'redux-saga/effects'
import postListSaga from "../../Pages/PostListPage/store/sagas/postListSaga";

export default function* rootSaga() {
    yield all([
        fork(postListSaga),
    ])
}