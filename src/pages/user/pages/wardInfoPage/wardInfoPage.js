import React from 'react'
import './wardInfoPage.css'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import TopNavLink from './components';

function WardInfoPage() {
  return (
    <div className='user_wardinfo_outerDiv'>
      <Nav>
        <TopNavLink path={'wardInfo'}>Ward Info</TopNavLink>
        <TopNavLink path={'discussion'}>Discussion</TopNavLink>
        <TopNavLink path={'project'}>Project</TopNavLink>
        <TopNavLink path={'announcement'}>Announcement</TopNavLink>
        <TopNavLink path={'complaint'}>Complaint</TopNavLink>
        <TopNavLink path={'gramSabha'}>Gram Sabha</TopNavLink>
        <TopNavLink path={'institutes'}>Institutes</TopNavLink>
        <TopNavLink path={'users'}>Users</TopNavLink>
      </Nav>
    </div>
  )
}

export default WardInfoPage