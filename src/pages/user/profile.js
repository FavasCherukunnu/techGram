import React from 'react';
import './profile.css';
import { PlaneButton } from '../../components/planeButton';
import { useNavigate } from 'react-router-dom';

const ProfileComponent = (props) => {
  const userData = props.userData;
  const uint8Array = new Uint8Array(userData.image.data.data);
  const navigate = useNavigate();
  let base64img = btoa(new Uint8Array(uint8Array).reduce(function (data, byte) {
    return data + String.fromCharCode(byte);
  }, ''));

  let handleOnClick = ()=>{
    navigate('/editUser');
  }

  return (
    <div className='profile_Container'>
      <div className='user_profile_avatarDiv' style={{ backgroundImage: `url(data:${userData.image.contentType};base64,${base64img})` }}>
        {/* <img src={`data:${userData.image.contentType};base64,${base64img}`} alt="Profile Picture" style={{ }} /> */}
      </div>
      <p className='profile_profileName'>{userData.fullName}</p>
      <div style={{ margin: '10px' }}>
        <PlaneButton onClick={handleOnClick} >Show More</PlaneButton>
      </div>
    </div>
  );
};

export default ProfileComponent;

