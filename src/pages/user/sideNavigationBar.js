import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import './sideNavigationBar.css'
import {SideNavLink} from './components';

function SideNavigationBar() {
    return (
        <div className='user_sideNavigationBar' style={{ width: '100%',paddingTop:'50px' }}>
            <SideNavLink path='wardInfo'>Ward Info</SideNavLink>
            <SideNavLink path='panchayathInfo'>Panchayath Info</SideNavLink>
            <SideNavLink path='locate'>Locate</SideNavLink>
            <SideNavLink path='survay'>Survey</SideNavLink>
            <SideNavLink path='/login'>Logout</SideNavLink>
        </div>
    )
}

export default SideNavigationBar