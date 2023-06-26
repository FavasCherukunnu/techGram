import React, { useEffect, useState } from 'react';
import './loginPage.css';
import { FormInput } from './component';
import { RectangleButton } from '../../components/buttonRectangle';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IconButton } from '../../components/iconButton';
import { HiOutlineHome } from 'react-icons/hi';
import { SERVER_ADDRESS } from '../../staticFiles/constants';
import { FormProvider, useForm } from 'react-hook-form';
import { getUserToken, loginUser } from '../../staticFiles/functions';


const LoginPage = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const [errorMsg, setErrorMsg] = useState('');

  // const [formData, setFormData] = useState({
  //   email: 'mhdfavascheru@gmail.com',
  //   password: '1234',
  // });


  // const handleOnChange = (event) => {
  //   const name = event.target['name'];
  //   formData[name] = event.target.value;

  //   setFormData({ ...formData });
  // };


  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   try {
  //     await axios.post(`${SERVER_ADDRESS}/user/login`, formData).then((res) => {
  //       localStorage.setItem('auth-token', res.data.token);
  //       navigate('/user/home', { replace: true })
  //     })
  //   } catch (err) {
  //     console.log(err.response);
  //   }
  //   // navigate('/home');
  //   // Perform signup logic here
  //   // For example, you can make an API request to register the user

  //   // Reset form inputs
  // };

  const onSubmit = async (data) => {
    try {
      await axios.post(`${SERVER_ADDRESS}/user/login`, data).then((res) => {
        loginUser(res.data.token)
        const user = res.data.user;
        if (user.isPresident === true) {
          navigate('/president/home');
        } else {
          setErrorMsg('You are user. not developed user paged. please wait')
        }
        // navigate('/user/home', { replace: true })
      })
    } catch (err) {
      console.log(err);
      if (err.response) {
        return setErrorMsg(err.response.data.message)
      }
      return setErrorMsg('Something Went Wrong')
    }
  }

  useEffect(
    () => {
      async function onLoad() {

        try {
          const res = await axios.get(`${SERVER_ADDRESS}/user/auth`, { headers: { 'u-auth-token': getUserToken() } })
          const user = res.data.user;
          if (user.isPresident === true) {
            navigate('/president/home');
          } 
        
        } catch (err) {
          console.log(err);
        }
      }

      onLoad();
    }, []
  )

  return (
    <FormProvider {...methods}>
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
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="gridDiv">
                  <div className='loginPage_gridItem'>
                    <FormInput inputTitle='Email' width='100%' name='email' placeholder="Email" />
                    <FormInput inputTitle='Password' width='100%' name='password' placeholder="Password" />
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingTop: '22px' }}>
                      <div style={{ height: '60px', lineHeight: '0.6' }}>

                        <Link ><p className='linkText'>Forget Password?</p></Link>
                        <Link to={'/signUp'}><p className='linkText'>New User? Sign Up</p></Link>
                      </div>
                      <RectangleButton width='150px' onClick={methods.handleSubmit(onSubmit)}>LOGIN</RectangleButton>
                    </div>
                  </div>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <div className='user_signUp_errormsgDiv'>
                    {errorMsg !== '' ? `${errorMsg}!!!` : ''}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default LoginPage;
