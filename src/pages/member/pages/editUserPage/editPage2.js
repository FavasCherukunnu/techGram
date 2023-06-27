import React, { useEffect, useState } from 'react';
import './editPage2.css';
import { FormInput } from './component';
import { RectangleButton } from '../../../../components/buttonRectangle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SERVER_ADDRESS } from '../../../../staticFiles/constants';
import { getUserToken } from '../../../../staticFiles/functions';

const EditMemberpage2 = (props) => {

  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
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
    password: '',
    dateTimeNow: '',
    image: '',
    isApproved: false
  });

  useEffect(
    () => {
      axios.get(`${SERVER_ADDRESS}/user/getUserInfo`, { headers: { 'u-auth-token': getUserToken() } }).then((res) => {
        let userData = res.data.user;
        setFormData({
          ...userData,
          dob:{day:new Date(userData.dob).getDate(),month:new Date(userData.dob).getMonth()+1,year:new Date(userData.dob).getFullYear()}
        });
      }).catch((err) => {
        console.log(err);
      })
    }, []
  )

  const handleOnChange = (event) => {
    const name = event.target['name'];
    if (name === 'dob.day') {
      formData['dob']['day'] = event.target.value;
    } else if (name === 'dob.month') {
      formData['dob']['month'] = event.target.value;
    } else if (name === 'dob.year') {
      formData['dob']['year'] = event.target.value;
    } else if (name === 'profileImage') {
      // console.log(event.target.files[0]);
      formData['image'] = event.target.files[0];

    } else {
      formData[name] = event.target.value;
    }
    setFormData({ ...formData });
  };


  const handleSubmit = async (event) => {
    const form = new FormData();
    event.preventDefault();
    form.append('data1', JSON.stringify(formData))
    form.append('image', formData.image);

    // formData.dataTimeNow = 
    try {
      // await axios.post('http://localhost:3002/api/register', form, { headers: localStorage.getItem('token') }).then((res) => {
        // localStorage.setItem('auth-token',res.data.token);
        navigate('/home');
      // })
    } catch(err) {
      console.log(err);
      console.log('Not signed in');
    }

    // Perform signup logic here
    // For example, you can make an API request to register the user

    // Reset form inputs
  };

  return (
    <div className=" signup-page rootDiv">
      <div className='topFlexiv'>
        <div style={{ overflowY: 'auto', padding: '20px' }}>
          <h1 className="hero_title">SIGN UP</h1>
          <form>
            <div className="gridDiv">
              <div className='gridItem'>
                <FormInput inputTitle='Full Name' onChange={handleOnChange} width='100%' name='fullName' value={formData.fullName} placeholder="Full Name" />
                <FormInput inputTitle='Address' width='100%' onChange={handleOnChange} name='address' value={formData.address} placeholder="Address" />
                <FormInput inputTitle='Father Name' width='100%' onChange={handleOnChange} name='fatherName' value={formData.fatherName} placeholder="Father Name" />
                <FormInput inputTitle='Mother Name' width='100%' onChange={handleOnChange} name='motherName' value={formData.motherName} placeholder="Mother Name" />
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                  <FormInput inputTitle='Phone No' width='48%' onChange={handleOnChange} name='phoneNo' value={formData.phoneNo} placeholder="Phone No" />
                  <FormInput inputTitle='Email' width='48%' onChange={handleOnChange} name='email' value={formData.email} placeholder="Email" />
                </div>
                <FormInput inputTitle='Profile image' type='file' name='profileImage' onChange={handleOnChange} />
              </div>
              <div className='gridItem'>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                  <FormInput inputTitle='District' width='48%' onChange={handleOnChange} name='district' value={formData.district} placeholder="District" />
                  <FormInput inputTitle='Taluk' width='48%' onChange={handleOnChange} name='taluk' value={formData.taluk} placeholder="Taluk" />
                </div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                  <FormInput inputTitle='Panchayath' width='48%' onChange={handleOnChange} name='panchayath' value={formData.panchayath} placeholder="Panchayath" />
                  <FormInput inputTitle='Ward No' width='48%' onChange={handleOnChange} name='wardNo' value={formData.wardNo} placeholder="Ward No" />
                </div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                  <FormInput inputTitle='Pin Code' width='48%' onChange={handleOnChange} name='pinCode' value={formData.pinCode} placeholder="Pin Code" />
                  <div style={{ width: '48%', display: 'flex', justifyContent: 'space-between' }}>
                    <FormInput inputTitle='Day' width='30%' onChange={handleOnChange} name='dob.day' value={formData.dob.day} placeholder="Day" />
                    <FormInput inputTitle='Month' width='30%' onChange={handleOnChange} name='dob.month' value={formData.dob.month} placeholder="Month" />
                    <FormInput inputTitle='Year' width='30%' onChange={handleOnChange} name='dob.year' value={formData.dob.year} placeholder="Year" />
                  </div>
                </div>
                <FormInput inputTitle='Adhar No' width='100%' onChange={handleOnChange} name='adharNo' value={formData.adharNo} placeholder="Adhar No" />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'end', paddingTop: '22px' }}>
                  <RectangleButton width='150px' onClick={handleSubmit}>Apply</RectangleButton>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export {EditMemberpage2};
