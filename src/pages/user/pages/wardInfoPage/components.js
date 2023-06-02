
import React, { useEffect, useState } from 'react'
import './component.css'
import { NavLink, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { AiFillCaretDown} from 'react-icons/ai';


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

export function UserWardInfoTopNavBar() {

    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState();
    const [path, setPath] = useState('Ward Info')

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

    const onChangeDropDown = (event) => {
        navigate(event.target.value);
        setPath(event.target.value)
    }

    const onTopNavPress = (e) => {
        setPath(e);
    }

    const isMobile = windowWidth <= 1280;

    if (isMobile) {
        return (
            <div className='user_wardinfo_TopDropDownDiv'>                    
                <select className='user_wardinfo_TopDropDown' value={path} onChange={onChangeDropDown}>
                    <option value="ward" className='user_wardInfo_drownText'>Ward Info</option>
                    <option value="discussion" className='user_wardInfo_drownText'>Discussion</option>
                    <option value="project" className='user_wardInfo_drownText'>Project</option>
                    <option value="announcement" className='user_wardInfo_drownText'>Announcement</option>
                    <option value="complaint" className='user_wardInfo_drownText'>Complaint</option>
                    <option value="gramSabha" className='user_wardInfo_drownText'>Gram Sabha</option>
                    <option value="institutes" className='user_wardInfo_drownText'>Institutes</option>
                    <option value="users" className='user_wardInfo_drownText'>Users</option>
                </select>
            </div>
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
