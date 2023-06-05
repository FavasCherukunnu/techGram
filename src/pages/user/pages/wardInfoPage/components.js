
import React, { useEffect, useState } from 'react'
import './component.css'
import { NavLink, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { AiFillCaretDown } from 'react-icons/ai';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

export function TopNavLink(props) {



    return (
        <NavLink end={props.end} to={props.path} style={{ textDecoration: 'none' }} >
            <div className='user_topNavLink' onClick={props.onClick ? () => props.onClick(props.path) : null}>
                <span className='user_topNavText'>
                    {props.children}
                </span>
            </div>
        </NavLink>
    )
}

export function MobileTopNavLink(props) {

    return (
        <NavLink end={props.end} to={props.path} style={{ textDecoration: 'none' }} >
            <div className='user_mobileTopNavLink' onClick={props.onClick ? () => props.onClick(props.path,props.children) : null}>
                <span className='user_topNavText'>
                    {props.children}
                </span>
            </div>
        </NavLink>
    )
}

export function UserWardInfoTopNavBar() {

    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState();
    const [path, setPath] = useState('Ward Info')
    const [childText, setchildText] = useState('Ward Info');

    useEffect(
        () => {
            setWindowWidth(window.innerWidth)
        }
        , []
    )
    useEffect(
        () => {
            const handleResize = () => { console.log(path); setWindowWidth(window.innerWidth) }
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }

    );


    const onTopNavPress = (e,child) => {
        setPath(e);
        setchildText(child)
    }

    const isMobile = windowWidth <= 1280;

    if (isMobile) {
        return (
            <Navbar expand={false} className='user_wardinfo_TopDropDownDiv'>
                <Container fluid>
                    <Navbar.Brand href="#" className='user_topNavText' style={{color:'white'}} >{childText}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-1 my-lg-0"
                            navbarScroll
                        >
                            <MobileTopNavLink path={'ward'} onClick={onTopNavPress}>Ward Info</MobileTopNavLink>
                            <MobileTopNavLink path={'discussion'} onClick={onTopNavPress}>Discussion</MobileTopNavLink>
                            <MobileTopNavLink path={'project'} onClick={onTopNavPress}>Project</MobileTopNavLink>
                            <MobileTopNavLink path={'announcement'} onClick={onTopNavPress}>Announcement</MobileTopNavLink>
                            <MobileTopNavLink path={'complaint'} onClick={onTopNavPress}>Complaint</MobileTopNavLink>
                            <MobileTopNavLink path={'gramSabha'} onClick={onTopNavPress}>Gram Sabha</MobileTopNavLink>
                            <MobileTopNavLink path={'institutes'} onClick={onTopNavPress}>Institutes</MobileTopNavLink>
                            <MobileTopNavLink path={'users'} onClick={onTopNavPress}>Users</MobileTopNavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    } else {
        return (
            <div className='user_wardinfo_TopNavouterDiv'>
                <Nav>
                    <TopNavLink path={'ward'} onClick={onTopNavPress}>Ward Info</TopNavLink>
                    <TopNavLink path={'discussion'} onClick={onTopNavPress}>Discussion</TopNavLink>
                    <TopNavLink path={'project'} onClick={onTopNavPress}>Project</TopNavLink>
                    <TopNavLink path={'announcement'} onClick={onTopNavPress}>Announcement</TopNavLink>
                    <TopNavLink path={'complaint'} onClick={onTopNavPress}>Complaint</TopNavLink>
                    <TopNavLink path={'gramSabha'} onClick={onTopNavPress}>Gram Sabha</TopNavLink>
                    <TopNavLink path={'institutes'} onClick={onTopNavPress}>Institutes</TopNavLink>
                    <TopNavLink path={'users'} onClick={onTopNavPress}>Users</TopNavLink>
                </Nav>
            </div>
        );
    }



}
