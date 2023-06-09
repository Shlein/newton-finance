import React from 'react';
import Container from "react-bootstrap/Container";
import {useAppSelector} from "../../redux/hooks";
import {getFavouritePostList} from "../PostListPage/store/selectors/postListSelectors";
import {Col, Row} from "react-bootstrap";
import Post from "../../components/Post/Post";

const FavouritePostsPage = () => {

    const favouritePostList = useAppSelector(getFavouritePostList);

    return (
        <Container>
            <Row md={3} s={2} className=" justify-content-center">
                {favouritePostList.map((post) => (
                    <Col key={post.id}>
                        <Post post={post} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default FavouritePostsPage;