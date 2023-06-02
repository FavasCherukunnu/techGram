
import React, { useEffect, useState } from 'react'
import './component.css'
import { NavLink, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


export function TopNavLink(props) {



    return (
        <NavLink end={props.end} to={props.path} style={{ textDecoration: 'none' }}>
            <div className='user_topNavLink' onClick={props.onClick ? () => props.onClick(props.path) : null}>
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
    const onTopNavPress = (e) => {
        setPath(e);
    }

    const isMobile = windowWidth <= 1280;

    if (isMobile) {
        return (
            <div className='user_panchayathInfo_TopDropDownDiv'>
                <select className='user_panchayathInfo_TopDropDown' value ={path} onChange={onChangeDropDown}>
                    <option value="panchayath" className='user_panchayathInfo_drownText'>Panchayath Info</option>
                    <option value="discussion"className='user_panchayathInfo_drownText'>Discussion</option>
                    <option value="project"className='user_panchayathInfo_drownText'>Project</option>
                    <option value="announcement"className='user_panchayathInfo_drownText'>Announcement</option>
                    <option value="complaint"className='user_panchayathInfo_drownText'>Complaint</option>
                    <option value="survay"className='user_panchayathInfo_drownText'>Survay</option>
                    <option value="institutes"className='user_panchayathInfo_drownText'>Institutes</option>
                </select>
            </div>
        );
    } else {
        return (
            <div className='user_wardinfo_TopNavouterDiv'>
                <Nav>
                    <TopNavLink path={'panchayath'} onClick={onTopNavPress}>Panchayath Info</TopNavLink>
                    <TopNavLink path={'discussion'}onClick={onTopNavPress}>Discussion</TopNavLink>
                    <TopNavLink path={'project'}onClick={onTopNavPress}>Project</TopNavLink>
                    <TopNavLink path={'announcement'}onClick={onTopNavPress}>Announcement</TopNavLink>
                    <TopNavLink path={'complaint'}onClick={onTopNavPress}>Complaint</TopNavLink>
                    <TopNavLink path={'survay'}onClick={onTopNavPress}>Survay</TopNavLink>
                    <TopNavLink path={'institutes'}onClick={onTopNavPress}>Institutes</TopNavLink>
                </Nav>
            </div>
        );
    }



}
