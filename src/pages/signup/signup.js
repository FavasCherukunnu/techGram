import React, { useState } from 'react';
import './SignupPage.css';
import { FormInput } from './component';
import { RectangleButton } from '../../components/buttonRectangle';
import { Link } from 'react-router-dom';

const SignupPage = () => {
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
    dataTimeNow: '',
    image:''
  });

  const handleOnChange = (event) => {
    const name = event.target['name'];
    if (name === 'dob.day') {
      formData['dob']['day'] = event.target.value;
    } else if (name === 'dob.month') {
      formData['dob']['month'] = event.target.value;
    } else if (name === 'dob.year') {
      formData['dob']['year'] = event.target.value;
    } else {
      formData[name] = event.target.value;
    }
    setFormData({ ...formData });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform signup logic here
    // For example, you can make an API request to register the user

    // Reset form inputs
  };

  return (
    <div className=" signup-page rootDiv">
      <div className='topFlexiv'>
        <div style={{overflowY:'auto',padding:'20px'}}>
        <h1 className="hero_title">SIGN UP</h1>
        <form onSubmit={handleSubmit}>
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
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingTop: '22px' }}>
              <div style={{height:'60px',lineHeight:'0.6'}}>
                    
                    <Link to={'/login'}><p className='linkText'>Already User? Login</p></Link>
                </div>
                <RectangleButton width='150px'>SIGNUP</RectangleButton>
              </div>
            </div>
          </div>

        </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
