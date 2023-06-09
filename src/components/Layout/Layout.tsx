import React from 'react';
import { Outlet } from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import NavigationPanel from "../NavigationPanel/NavigationPanel";

const Layout = () => {
    return (
        <>
            <Container fluid="md" className="mb-3">
                <Row className="justify-content-md-center">
                    <Col>
                        <NavigationPanel/>
                    </Col>
                </Row>
            </Container>

            <Outlet />

        </>
    );
};

export default Layout;