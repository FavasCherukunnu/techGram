import React from 'react'
import './wardInfoPage.css'
import Nav from 'react-bootstrap/Nav';
import { NavLink, Outlet } from 'react-router-dom';
import { UserWardInfoTopNavBar} from './components';

function WardInfoPage() {
  return (
    <div style={{height:'100%',width:'100%',overflow:'hidden'}}>
      <UserWardInfoTopNavBar/>
      <Outlet/>
    </div>
  )
}

export default WardInfoPage