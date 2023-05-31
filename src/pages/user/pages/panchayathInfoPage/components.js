
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

export function UserPanchayathInfoTopNavBar() {

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
        setPath(event.target.value);
    }

    const isMobile = windowWidth <= 1280;

    if (isMobile) {
        return (
            // <div className='user_wardinfo_TopNavouterDiv'>
                <select className='user_wardinfo_TopNavouterDiv' value ={path} onChange={onChangeDropDown}>
                    <option value="panchayath">Panchayath Info</option>
                    <option value="discussion">Discussion</option>
                    <option value="project">Project</option>
                    <option value="announcement">Announcement</option>
                    <option value="complaint">Complaint</option>
                    <option value="survay">Survay</option>
                    <option value="institutes">Institutes</option>
                </select>
            // </div>
        );
    } else {
        return (
            <div className='user_wardinfo_TopNavouterDiv'>
                <Nav>
                    <TopNavLink path={'panchayath'}>Panchayath Info</TopNavLink>
                    <TopNavLink path={'discussion'}>Discussion</TopNavLink>
                    <TopNavLink path={'project'}>Project</TopNavLink>
                    <TopNavLink path={'announcement'}>Announcement</TopNavLink>
                    <TopNavLink path={'complaint'}>Complaint</TopNavLink>
                    <TopNavLink path={'survay'}>Survay</TopNavLink>
                    <TopNavLink path={'institutes'}>Institutes</TopNavLink>
                </Nav>
            </div>
        );
    }



}
