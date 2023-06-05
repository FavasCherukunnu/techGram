import React from 'react';
import './profile.css';
import { PlaneButton } from '../../components/planeButton';

const ProfileComponent = (props) => {
  const userData = props.userData;
  const uint8Array = new Uint8Array(userData.image.data.data);
  let base64img= btoa(new Uint8Array(uint8Array).reduce(function (data, byte) {
    return data + String.fromCharCode(byte);
}, ''));
  return (
    <div className='profile_Container'>
      <div className='user_profile_avatarDiv' style={{backgroundImage:`url(data:${userData.image.contentType};base64,${base64img})`}}>
        {/* <img src={`data:${userData.image.contentType};base64,${base64img}`} alt="Profile Picture" style={{ }} /> */}
      </div>
      <p className='profile_profileName'>{userData.fullName}</p>
      <div style={{ margin: '10px' }}>
        <PlaneButton>Show More</PlaneButton>
      </div>
    </div>
  );
};

export default ProfileComponent;

