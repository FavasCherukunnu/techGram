
import React, { useState } from 'react'
import './component.css'
import { NavLink, useNavigate } from 'react-router-dom';


export function TopNavLink(props) {



    return (
        <NavLink to={props.path} style={{textDecoration:'none'}}>
            <div className='user_topNavLink'>
                <span className='user_topNavText'>
                    {props.children}
                </span>
            </div>
        </NavLink>
    )
}

export default TopNavLink