import React, { useEffect, useState } from 'react'
import './CreatePanchayath.css'
import './component.css'
import { FormInput } from './component';
import { Link } from 'react-router-dom';
import { RectangleButton } from '../../../../components/buttonRectangle';
import data from '../../../../staticFiles/districts.json'

export function CreatePanchayath() {
  const [districtId, setDistrictId] = useState();

  useEffect(
    () => {
      // fetchDropdownData();
      console.log(data.districts[7]);
    }, []
  );

  const onClickDistrict = (event) => {
    setDistrictId(event.target.value)
  }


  return (
    <div className=" signup-page rootDiv">
      <div className='topFlexiv'>
        <div style={{ overflowY: 'auto', padding: '20px' }}>
          <h1 className="hero_title">CREATE PANCHAAYTH</h1>
          <form>
            <div className="gridDiv">
              <div className='gridItem'>
                <FormInput inputTitle='Panchayath Name' width='100%' name='fullName' placeholder="Panchayath Name" />
                <div className='DropDownOutDiv'>
                  <p className="DropDowninputTitleFont">Select District</p>
                  <select value={districtId} onChange={onClickDistrict}>
                    {data.districts.map(
                      (element) => {
                        return (<option value={element.id} >{element.name}</option>)
                      }
                    )}
                  </select>
                </div>
                <div className='DropDownOutDiv'>
                  <p className="DropDowninputTitleFont">Select District</p>
                  <select>
                    {districtId != null ? data.districts[districtId - 1].block_panchayats ? data.districts[districtId - 1].block_panchayats.map(
                      (element) => {
                        return (<option value={element.id} >{element.name}</option>)
                      }
                    ) : <option >select</option> : <option >select</option>}
                  </select>
                </div>
                <FormInput inputTitle='Father Name' width='100%' name='fatherName' placeholder="Father Name" />
                <FormInput inputTitle='Mother Name' width='100%' name='motherName' placeholder="Mother Name" />
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                  <FormInput inputTitle='Phone No' width='48%' name='phoneNo' placeholder="Phone No" />
                  <FormInput inputTitle='Email' width='48%' name='email' placeholder="Email" />
                </div>
                <FormInput inputTitle='Profile image' type='file' name='profileImage' />
              </div>
              <div className='gridItem'>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                  <FormInput inputTitle='District' width='48%' name='district' placeholder="District" />
                  <FormInput inputTitle='Taluk' width='48%' name='taluk' placeholder="Taluk" />
                </div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                  <FormInput inputTitle='Panchayath' width='48%' name='panchayath' placeholder="Panchayath" />
                  <FormInput inputTitle='Ward No' width='48%' name='wardNo' placeholder="Ward No" />
                </div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                  <FormInput inputTitle='Pin Code' width='48%' name='pinCode' placeholder="Pin Code" />
                  <div style={{ width: '48%', display: 'flex', justifyContent: 'space-between' }}>
                    <FormInput inputTitle='Day' width='30%' name='dob.day' placeholder="Day" />
                    <FormInput inputTitle='Month' width='30%' name='dob.month' placeholder="Month" />
                    <FormInput inputTitle='Year' width='30%' name='dob.year' placeholder="Year" />
                  </div>
                </div>
                <FormInput inputTitle='Adhar No' width='100%' name='adharNo' placeholder="Adhar No" />
                <FormInput inputTitle='Password' width='100%' name='password' placeholder="Password" />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingTop: '22px' }}>
                  <div style={{ height: '60px', lineHeight: '0.6' }}>

                    <Link to={'/login'}><p className='linkText'>Already User? Login</p></Link>
                  </div>
                  <RectangleButton width='150px' >SIGNUP</RectangleButton>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
