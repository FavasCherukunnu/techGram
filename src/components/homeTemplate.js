import React, { useLayoutEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiHomeAlt, BiSearch } from 'react-icons/bi';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import './navbar.css';
import { Col, Row, Stack } from "react-bootstrap";
import './sideNavigation.css'
import './contentDiv.css'

export default function HomeTemplate() {

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#E3F2DC"
    });

    return (
        <div>
            <div className="outerDiv p-2">
                <Navbar className="topNavBar" bg="light" expand="lg">
                    <Container fluid>
                        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="sideNavBarScroll" />

                        <Stack className="ms-auto" direction="horizontal" gap={3}>
                            <Form >
                                <Stack direction="horizontal">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <BiSearch size={25} />
                                </Stack>
                            </Form>
                            <MdOutlineNotificationsNone size={25} />
                            <BiHomeAlt size={25} />
                        </Stack>
                    </Container>
                </Navbar>
                <div className="contentDiv pt-2">
                    <div className="contentInnerDiv"></div>
                </div>
            </div>
            <div className='navBarOuter p-2'>
                <Stack className='sideNavBar'>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Active</Nav.Link>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled className='mt-auto'>
                            Disabled
                        </Nav.Link>
                    </Nav>
                </Stack>
            </div>
        </div>
    );

}