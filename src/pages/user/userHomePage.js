import React, { useEffect, useLayoutEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiHomeAlt, BiSearch,BiExpand,BiListUl} from 'react-icons/bi';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import './userHomePage.css';
import { Col, Row, Stack } from "react-bootstrap";
import ProfileComponent from "./profile";
import SideNavigationBar from "./sideNavigationBar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { IconButton } from "../../components/iconButton";

export default function UserHomePage() {
    const navigate = useNavigate();
    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#E3F2DC"
    });
    const [expanded,setExpanded] = useState(false);
    const [smallScreen,setSmallScreen] = useState(false);
    const [userData,setUserData] = useState({
        fullName: 'Mohammed Favas P',
        address: '',
        phoneNo: '',
        email: '',
        fatherName: '',
        motherName: '',
        district: '',
        taluk: '',
        panchayath: '',
        wardNo: '',
        pinCode: '',
        dob: { day: '', month: '', year: '' },
        adharNo: '',
        dataTimeNow: '',
        image:{data:{data:''},contentType:''}
      });

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
    function handleWindowResize(){
        if(window.innerWidth < 800){
            if(smallScreen===false)
                setExpanded(true);
            setSmallScreen(true)
        }else{
            setSmallScreen(false);
        }
    }

    useEffect(()=>{
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    },)

    useEffect(
        ()=>{
            const token = localStorage.getItem('auth-token');
            axios.get('http://localhost:3002/api/getUserInfo',{headers:{'x-auth-token':token}}).then((res)=>{
                // console.log(res.data.user.image.data.data);
                const dat = {...res.data.user};
                console.log(dat);
                setUserData(dat);
            }).catch((err)=>{
                console.log(err);
            })
        },[]
    )
    return (
        <div className="navBarOuter">
            <div className="flex_container">
                <div  className="sideNavBarOuter" style={expanded?{width:'0px',padding:'0px'}:{width:'250px',paddingRight:'10px'}}>
                    <Stack className='sideNavBar'>
                        <ProfileComponent userData={userData}/>
                        <SideNavigationBar/>
                    </Stack>
                </div>
                <div className="rightFlexItem"  >
                    <div className="userHomePage_outerDiv">
                        <Navbar className="topNavBar" bg="light" expand="lg">
                            <Container fluid>
                                {/* <Navbar.Toggle aria-controls="sideNavBarScroll" /> */}

                                {ReturnexpandedButton()}


                                <Stack className="ms-auto" direction="horizontal" gap={3}>
                                    <Form >
                                        <Stack direction="horizontal" >
                                            <Form.Control
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                                style={{display:smallScreen?'none':'inline'}}
                                            />
                                            <IconButton>
                                            <BiSearch size={25} />
                                            </IconButton>
                                        </Stack>
                                    </Form>
                                    <IconButton><MdOutlineNotificationsNone size={25} /></IconButton>
                                    <IconButton onClick={()=>navigate('/home')}><BiHomeAlt size={25} /></IconButton>
                                </Stack>
                            </Container>
                        </Navbar>
                        <div className="userHomePage_contentDiv" id="contentDiv" style={{width:expanded?'calc(100vw - 20px)':smallScreen?'calc(100vw - 20px)':'calc(100vw - 270px)'}}>
                            <div className="userHomePage_contentInnerDiv">
                                <Outlet/>
                            </div>
                        </div>
                    </div>

                    {/* <div style={{backgroundColor:'white',height:'500px'}}>

                    </div> */}
                </div>
            </div>
        </div>
    );

}