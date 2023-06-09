import React from 'react';
import Card from "react-bootstrap/Card";
import {Button, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {IPost} from "../../Pages/PostListPage/store/types/postListTypes";
import {useAppDispatch} from "../../redux/hooks";
import {changePostFavouriteStatus} from "../../Pages/PostListPage/store/slices/postListSlice";

interface IProps {
    post: IPost,
}
const Post: React.FC<IProps> = (props) => {

    const { id, title, body, isFavourite} = props.post;
    const dispatch = useAppDispatch();

    return (
        <Container>
             <Row>
                <Card key={id} className="mb-3">
                    <Card.Img
                        variant="top"
                        src="https://storage.googleapis.com/go-merchant-production.appspot.com/content/images/2019/06/5-Situs-e-Commerce-dengan-Konten-Blog-Terbaik.jpg"
                    />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {body}
                        </Card.Text>
                        {
                            isFavourite
                                ?
                                    <Button
                                        onClick={() => {
                                            dispatch(changePostFavouriteStatus({postId: id, isFavourite: isFavourite}));
                                        }}
                                    >
                                        Удалить из избранного
                                    </Button>
                                :
                                    <Button
                                        onClick={() => {
                                            dispatch(changePostFavouriteStatus({postId: id, isFavourite: isFavourite}));
                                        }}
                                    >
                                        Добавить в избранное
                                    </Button>
                        }
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};

export default Post;