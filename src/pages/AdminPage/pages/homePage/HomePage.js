import React from 'react'
import './HomePage.css'
import { RectangleButton } from '../../../../components/buttonRectangle'
import { useNavigate } from 'react-router-dom'

export  function AdminHomePage() {

    const navigate = useNavigate()

    function onClickCreatePanchayath(){
        navigate('../createPanchayath')
    }

  return (
    <div className='admin_base'>
        <RectangleButton width='200px' onClick={onClickCreatePanchayath}>Create Panchayath</RectangleButton>
    </div>
  )
}
