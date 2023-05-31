import React from 'react'
import './wardInfoPage.css'
import Nav from 'react-bootstrap/Nav';
import { NavLink, Outlet } from 'react-router-dom';
import { UserWardInfoTopNavBar} from './components';

function WardInfoPage() {
  return (
    <div>
      <UserWardInfoTopNavBar/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default WardInfoPage