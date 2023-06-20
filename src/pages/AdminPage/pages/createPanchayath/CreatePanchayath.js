import React, { useEffect, useState } from 'react'
import './CreatePanchayath.css'
import './component.css'
import { FormInput } from './component';
import { Link, useNavigate } from 'react-router-dom';
import { RectangleButton } from '../../../../components/buttonRectangle';
import data from '../../../../staticFiles/districts.json'
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../staticFiles/constants';
import { isLogedIn } from '../../../../staticFiles/functions';

export function CreatePanchayath() {
  const [districtId, setDistrictId] = useState(-1);
  const [blockId, setBlockId] = useState(-1);
  const [panchayathId, setPanchayathId] = useState(-1);
  const [title, setTitle] = useState('');
  const [loginFailedMessage, setLoginFailedMessage] = useState(null);
  const navigate = useNavigate();
  const onChangeDistrict = (event) => {
    setDistrictId(event.target.value)
    setBlockId(-1)
    setPanchayathId(-1)
  }

  const onChangeBlock = (event) => {
    setBlockId(event.target.value)
    setPanchayathId(-1)
  }
  const onChangePanchayath = (event) => {
    setPanchayathId(event.target.value)
  }

  const buildDistrict = () => {
    return data.districts.map(
      (element) => {
        return (<option key={element.id} value={element.id} >{element.name}</option>)
      }
    )
  }

  const builBlock = () => {
    var arr = [];
    arr.push(<option key={-1} value={-1}>select</option>)
    if (districtId > 0) {
      const district = data.districts[districtId - 1];
      if (district.block_panchayats) {

        arr.push(district.block_panchayats.map(
          (block) => {
            return (<option key={block.id} value={block.id} >{block.name}</option>)
          }
        ))
      }
    }
    return arr
  }

  const builPanchayath = () => {
    var arr = [];
    arr.push(<option key={-1} value={-1}>select</option>)
    if (blockId > 0 && districtId > 0) {
      const block = data.districts[districtId - 1].block_panchayats[blockId - 1];
      if (block.panchayats) {

        arr.push(block.panchayats.map(
          (panchayath) => {
            return (<option key={panchayath.id} value={panchayath.id} >{panchayath.name}</option>)
          }
        ));
      }
    }
    return arr;
  }

  const handleOnSubmit = async () => {
    if (districtId > 0 && blockId > 0 && panchayathId > 0 && title !== '') {
      let res = {
        title: title,
        district: data.districts[districtId - 1].name,
        block: data.districts[districtId - 1].block_panchayats[blockId - 1].name,
        panchayath: data.districts[districtId - 1].block_panchayats[blockId - 1].panchayats[panchayathId - 1].name,
        id: `${districtId}${blockId}${panchayathId}`
      }
      try {
        const token = localStorage.getItem('x-auth-token');
        await axios.post(`${SERVER_ADDRESS}/admin/createPanchayath`, { panchayath: res }, { headers: { 'x-auth-token': token } })
        navigate('../home')
      } catch (err) {

        console.log(err);
        let loggedIn = isLogedIn(err);
        if(loggedIn===true){
          setLoginFailedMessage(err.response.data.message);
        }else if(loggedIn===null){
          setLoginFailedMessage('Somthing Went Wrong');
        }else{
          navigate('/Admin')
          //navigate to login page
        }
      }
    } else {
      console.log('please select value');
    }
  }

  const handleTitleInput = (event) => {
    setTitle(event.target.value);
  }


  return (
    <div className=" signup-page rootDiv">
      <div className='topFlexiv'>
        <div style={{ overflowY: 'auto', padding: '20px' }}>
          <h1 className="hero_title">CREATE PANCHAAYTH</h1>
          <form>
            <div className="gridDiv">
              <div className='gridItem'>
                <FormInput onChange={handleTitleInput} inputTitle='Panchayath Title Name' width='100%' name='title' placeholder="Panchayath Name" value={title} />

                <div className='DropDownOutDiv'>
                  <p className="DropDowninputTitleFont">Select District</p>
                  <select value={districtId} onChange={onChangeDistrict} className='admin_customDropDownToggle'>
                    <option key={-1} value={-1} >select</option>
                    {
                      buildDistrict()
                    }
                  </select>
                </div>

                <div className='DropDownOutDiv'>
                  <p className="DropDowninputTitleFont">Select block</p>
                  <select className='admin_customDropDownToggle' onChange={onChangeBlock}>
                    {
                      builBlock()
                    }
                  </select>
                </div>

                <div className='DropDownOutDiv'>
                  <p className="DropDowninputTitleFont">Select Panchayath</p>
                  <select className='admin_customDropDownToggle' onChange={onChangePanchayath}>
                    {builPanchayath()}
                  </select>
                </div>
                <div className='admin_createPanchayath_buttonDiv'>
                  <div>
                    <div className='admin_createPanchayath_err_text'>
                      {loginFailedMessage?`${loginFailedMessage}!!!`:''}
                    </div>
                  </div>
                  <RectangleButton onClick={handleOnSubmit}>Create</RectangleButton>
                </div>

              </div>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
