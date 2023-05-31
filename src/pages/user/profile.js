import React from 'react';
import './profile.css';
import { PlaneButton } from '../../components/planeButton';

const ProfileComponent = (props) => {
  const userData = props.userData;
  return (
    <div className='profile_Container'>
      <img src={userData.image} alt="Profile Picture" style={{ maxWidth: '200px' }} />
      <p className='profile_profileName'>{userData.fullName}</p>
      <div style={{margin:'10px'}}>
        <PlaneButton>Show More</PlaneButton>
      </div>
    </div>
  );
};

export default ProfileComponent;

