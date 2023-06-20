import React from 'react'
import './HomePage.css'
import { RectangleButton } from '../../../../components/buttonRectangle'
import { useNavigate } from 'react-router-dom'

export  function AdminHomePage() {

    const navigate = useNavigate()

    function onClickCreatePanchayath(){
        navigate('../createPanchayath')
    }
    function onClickViewPanchayath(){
      navigate('../viewPanchayath')
  }
  return (
    <div className='admin_base'>
        <RectangleButton width='200px' onClick={onClickCreatePanchayath}>Create Panchayath</RectangleButton>
        <div style={{height:'10px'}}></div>
        <RectangleButton width='200px' onClick={onClickViewPanchayath}>View Panchayath</RectangleButton>
    </div>
  )
}
