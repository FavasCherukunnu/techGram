import React from 'react'
import './panchayathInfoPage.css'
import Nav from 'react-bootstrap/Nav';
import { NavLink, Outlet } from 'react-router-dom';
import { UserPanchayathInfoTopNavBar} from './components';

function WardInfoPage() {
  return (
    <div>
      <UserPanchayathInfoTopNavBar/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default WardInfoPage