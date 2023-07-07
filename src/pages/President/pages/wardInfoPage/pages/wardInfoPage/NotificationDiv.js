import React, { useContext, useEffect, useState } from 'react';
import { PlaneButton } from '../../../../../../components/planeButton';
import './WardInfoPageHome.css'
import { NotificatonTemplate, WardDetailsTable } from './component';
import { UserContext } from '../../../../../user/userHomePage';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { getUserToken } from '../../../../../../staticFiles/functions';
import { AvatarImage } from '../../../../../../components/imageLoading';

function NotificationSection() {

  const userCont = useContext(UserContext);
  const user = userCont.user;
  const [wardDetails,setWardDetails] = useState({})

  useEffect(
    ()=>{
      const loadWard = async ()=>{

        try{
          const res = await axios.get(
            `${SERVER_ADDRESS}/user/getWardBywardOId/${user.wardOId}`,{headers:{'u-auth-token':getUserToken()}}
          );
          setWardDetails(res.data.ward)
        }catch(err){
          console.log(err);
        }
      }
      loadWard();
    },[user.wardOId]
  )

  return (
    <div className='user_wardInfo_innerContent'>
      <div className='user_wardInfo_avatar'>
        <AvatarImage id={wardDetails?.member?._id} dId={'samapamdsfdfsl'} height='100%' width='100%' />
      </div>
      <p className='user_wardInfo_memberName'>{wardDetails?.member?.fullName}</p>
      <PlaneButton>Show more</PlaneButton>
      <WardDetailsTable details={wardDetails}/>
      <p className='user_wardInfo_notification'>Notification</p>
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      <NotificatonTemplate />
      {/* <NotificatonTemplate /> */}

    </div>);
}

// const NotificationSection = React.memo(NotificationExample)

export { NotificationSection }