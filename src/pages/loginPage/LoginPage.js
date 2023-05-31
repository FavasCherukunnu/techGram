import React, { useState } from 'react';
import './loginPage.css';
import { FormInput } from './component';
import { RectangleButton } from '../../components/buttonRectangle';
import { Link,useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    navigate('/home');
    // Perform signup logic here
    // For example, you can make an API request to register the user

    // Reset form inputs
  };

  return (
    <div className=" signup-page rootDiv">
      <div className='topFlexiv'>
        <div style={{overflowY:'auto',padding:'20px'}}>
        <h1 className="hero_title">LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div className="gridDiv">
            <div className='loginPage_gridItem'>
              <FormInput inputTitle='Email' onChange={handleOnChange} width='100%' name='email' value={formData.fullName} placeholder="Email" />
              <FormInput inputTitle='Password' width='100%' onChange={handleOnChange} name='password' value={formData.address} placeholder="Password" />
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingTop: '22px' }}>
                <div style={{height:'60px',lineHeight:'0.6'}}>
                    
                    <Link ><p className='linkText'>Forget Password?</p></Link>
                    <Link to={'/signUp'}><p className='linkText'>New User? Sign Up</p></Link>
                </div>
                <RectangleButton width='150px' onClick={handleSubmit}>LOGIN</RectangleButton>
              </div>
            </div>
          </div>

        </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
