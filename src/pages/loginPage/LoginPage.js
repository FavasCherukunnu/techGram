import React, { useState } from 'react';
import './loginPage.css';
import { FormInput } from './component';
import { RectangleButton } from '../../components/buttonRectangle';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IconButton } from '../../components/iconButton';
import { HiOutlineHome } from 'react-icons/hi';


const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: 'mhdfavascheru@gmail.com',
    password: '1234',
  });

  const handleOnChange = (event) => {
    const name = event.target['name'];
    formData[name] = event.target.value;

    setFormData({ ...formData });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      await axios.post('http://localhost:3002/api/login', formData).then((res) => {
        localStorage.setItem('auth-token', res.data.token);
        navigate('/home')
      })
    } catch (err) {
      console.log(err.response);
    }
    // navigate('/home');
    // Perform signup logic here
    // For example, you can make an API request to register the user

    // Reset form inputs
  };

  return (
    <div className='user_loginPage_base'>

      <div className='topBarFixed'>
        <div></div>
        <div style={{ display: 'flex' }}>
          <IconButton onClick={() => navigate('/')}><HiOutlineHome size={28} /></IconButton>
        </div>
      </div>
      <div className="rootDiv">
        <div className='topFlexiv'>
          <div style={{ overflowY: 'auto', padding: '20px' }}>
            <h1 className="hero_title">LOGIN</h1>
            <form>
              <div className="gridDiv">
                <div className='loginPage_gridItem'>
                  <FormInput inputTitle='Email' onChange={handleOnChange} width='100%' name='email' value={formData.email} placeholder="Email" />
                  <FormInput inputTitle='Password' width='100%' onChange={handleOnChange} name='password' value={formData.password} placeholder="Password" />
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingTop: '22px' }}>
                    <div style={{ height: '60px', lineHeight: '0.6' }}>

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
    </div>
  );
};

export default LoginPage;
