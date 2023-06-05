import React, { useEffect, useState } from 'react'
import './EditUserPage.css'
import axios from 'axios';
import { RectangleButton } from '../../../../components/buttonRectangle';

export function EditUserPage() {

  const [userData, setUserData] = useState({
    fullName: 'Mohammed Favas P',
    address: '',
    phoneNo: '',
    email: '',
    fatherName: '',
    motherName: '',
    district: '',
    taluk: '',
    panchayath: '',
    wardNo: '',
    pinCode: '',
    dob: { day: '', month: '', year: '' },
    adharNo: '',
    dataTimeNow: '',
    image: { data: { data: '' }, contentType: '' }
  });
  const uint8Array = new Uint8Array(userData.image.data.data);
  let base64img = btoa(new Uint8Array(uint8Array).reduce(function (data, byte) {
    return data + String.fromCharCode(byte);
  }, ''));
  useEffect(
    () => {
      const token = localStorage.getItem('auth-token');
      axios.get('http://localhost:3002/api/getUserInfo', { headers: { 'x-auth-token': token } }).then((res) => {
        // console.log(res.data.user.image.data.data);
        const dat = { ...res.data.user };
        setUserData(dat);
      }).catch((err) => {
        console.log(err);
      })
    }, []
  )

  return (
    <div className='EditUserPage_outerDiv'>
      <div>
      <div className='EditUserPage_avatarDiv' style={{ backgroundImage: `url(data:${userData.image.contentType};base64,${base64img})` }}>
        {/* <img src={`data:${userData.image.contentType};base64,${base64img}`} alt="Profile Picture" style={{ }} /> */}
      </div>
      </div>
      <div className='EditUserPage_formDiv'>
        <p className='profile_profileName'>{userData.fullName}</p>
        <div className='EditUserPage_gridDiv'>
          <table className='EditUserPage_contentTable'>
            <tr>
              <td className='first_element'>Name</td>
              <td className='second_element'>{userData.fullName}</td>
            </tr>
            <tr>
              <td className='first_element'>Address</td>
              <td className='second_element'>{userData.address}</td>
            </tr>
            <tr>
              <td className='first_element'>Father</td>
              <td className='second_element'>{userData.fatherName}</td>
            </tr>
            <tr>
              <td className='first_element'>Mother</td>
              <td className='second_element'>{userData.motherName}</td>
            </tr>
            <tr>
              <td className='first_element'>Phone No</td>
              <td className='second_element'>{userData.phoneNo}</td>
            </tr>
            <tr>
              <td className='first_element'>Email</td>
              <td className='second_element'>{userData.email}</td>
            </tr>
          </table>
          <table className='EditUserPage_contentTable'>
            <tr>
              <td className='first_element'>District</td>
              <td className='second_element'>{userData.district}</td>
            </tr>
            <tr>
              <td className='first_element'>Taluk</td>
              <td className='second_element'>{userData.taluk}</td>
            </tr>
            <tr>
              <td className='first_element'>Panchayath</td>
              <td className='second_element'>{userData.panchayath}</td>
            </tr>
            <tr>
              <td className='first_element'>Ward</td>
              <td className='second_element'>{userData.wardNo}</td>
            </tr>
            <tr>
              <td className='first_element'>pinCode</td>
              <td className='second_element'>{userData.pinCode}</td>
            </tr>
            <tr>
              <td className='first_element'>Date of Birth</td>
              <td className='second_element'>{`${new Date(userData.dob).getDate()}-${new Date(userData.dob).getMonth()}-${new Date(userData.dob).getFullYear()}`}</td>
            </tr>
            <tr>
              <td className='first_element'>Adhar No</td>
              <td className='second_element'>{userData.adharNo}</td>
            </tr>
          </table>
          
        </div>
        <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
          <RectangleButton>Edit</RectangleButton>
        </div>
      </div>
    </div>
  )
}
