import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {Col, Nav, Row} from "react-bootstrap";
import {FAVOURITE_POSTS_PAGE_ROUTE, MAIN_PAGE_ROUTE} from "../../contants/routeConstants";

function NavigationPanel() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Row className="justify-content-center">
                    <Col>
                        <Nav.Link
                            as={Link}
                            to={MAIN_PAGE_ROUTE}
                            className="link-light"
                        >
                            Главная страница
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link
                            as={Link}
                            to={FAVOURITE_POSTS_PAGE_ROUTE}
                            className="link-light"
                        >
                            Избранные посты
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default NavigationPanel