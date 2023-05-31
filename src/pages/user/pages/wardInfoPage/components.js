
import React, { useEffect, useState } from 'react'
import './component.css'
import { NavLink, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


export function TopNavLink(props) {



    return (
        <NavLink end={props.end} to={props.path} style={{ textDecoration: 'none' }}>
            <div className='user_topNavLink'>
                <span className='user_topNavText'>
                    {props.children}
                </span>
            </div>
        </NavLink>
    )
}

export function UserWardInfoTopNavBar() {

    const navigate = useNavigate();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [path,setPath] = useState('ward')

    useEffect(
        () => {
            const handleResize = () => { setWindowWidth(window.innerWidth) }
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }

    );

    const onChangeDropDown= (event)=>{
        navigate(event.target.value);
    }

    const isMobile = windowWidth <= 1280;

    if (isMobile) {
        return (
            // <div className='user_wardinfo_TopNavouterDiv'>
                <select className='user_wardinfo_TopNavouterDiv' onChange={onChangeDropDown}>
                    <option value="ward">Ward Info</option>
                    <option value="discussion">Discussion</option>
                    <option value="project">Project</option>
                    <option value="announcement">Announcement</option>
                    <option value="complaint">Complaint</option>
                    <option value="gramSabha">Gram Sabha</option>
                    <option value="institutes">Institutes</option>
                    <option value="users">Users</option>
                </select>
            // </div>
        );
    } else {
        return (
            <div className='user_wardinfo_TopNavouterDiv'>
                <Nav>
                    <TopNavLink path={'ward'}>Ward Info</TopNavLink>
                    <TopNavLink path={'discussion'}>Discussion</TopNavLink>
                    <TopNavLink path={'project'}>Project</TopNavLink>
                    <TopNavLink path={'announcement'}>Announcement</TopNavLink>
                    <TopNavLink path={'complaint'}>Complaint</TopNavLink>
                    <TopNavLink path={'gramSabha'}>Gram Sabha</TopNavLink>
                    <TopNavLink path={'institutes'}>Institutes</TopNavLink>
                    <TopNavLink path={'users'}>Users</TopNavLink>
                </Nav>
            </div>
        );
    }



}
