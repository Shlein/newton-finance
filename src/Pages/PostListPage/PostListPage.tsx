import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getPostListSagaAction} from "./store/sagas/postListSagaActions";
import {getIsPostListPageLoading, getPostList} from "./store/selectors/postListSelectors";
import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Post from "../../components/Post/Post";

const PostListPage = () => {

    const dispatch = useAppDispatch();
    const postList = useAppSelector(getPostList);
    const isPageLoading = useAppSelector(getIsPostListPageLoading);

    useEffect(() => {
        dispatch(getPostListSagaAction())
    }, [dispatch])

    return (
        <>
            {
                isPageLoading
                    ?
                        <Button variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </Button>
                    :
                        <Container>
                            <Row md={3} s={2} className="justify-content-center">
                                {postList.map((post) => (
                                    <Col key={post.id} className="flex">
                                        <Post post={post} />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
            }
        </>
    );
};

export default PostListPage;