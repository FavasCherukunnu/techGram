import React, { useLayoutEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiHomeAlt, BiSearch,BiExpand,BiListUl} from 'react-icons/bi';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import './navbar.css';
import { Col, Row, Stack } from "react-bootstrap";
import './sideNavigation.css'
import './contentDiv.css'

export default function HomeTemplate() {

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#E3F2DC"
    });
    const [expanded,setExpanded] = useState(false);

    function ReturnexpandedButton(){
        if(expanded){
            return (<BiListUl size={25} onClick={()=>{
                setExpanded(!expanded)
            }}/>);
        }else{
            return (<BiExpand onClick={()=>{
                setExpanded(!expanded)
            }} size={25}/>);
        }
    }


    return (
        <div className="navBarOuter p-2">
            <Row className=" p-0 m-0" style={{height:'100%'}}>
                <Col  className="p-0 me-2" style={{display:expanded?'none':'inline'}}>
                    {/* <div className=''> */}
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
                    {/* </div> */}
                    {/* <div style={{backgroundColor:'white',height:'500px'}}>

                    </div> */}
                </Col>
                <Col className="p-0"  >
                    <div className="outerDiv">
                        <Navbar className="topNavBar" bg="light" expand="lg">
                            <Container fluid>
                                {/* <Navbar.Toggle aria-controls="sideNavBarScroll" /> */}

                                {ReturnexpandedButton()}


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
                            <div className="contentInnerDiv p-4">njh</div>
                        </div>
                    </div>

                    {/* <div style={{backgroundColor:'white',height:'500px'}}>

                    </div> */}
                </Col>
            </Row>
        </div>
    );

}