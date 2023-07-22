import React from 'react'
import { ComplaintTemplate } from './component'
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../userHomePage';
import { useEffect } from 'react';
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions';
import { SimpleLoadingScreen } from '../../../../../../components/LoadingScreen';

function ComplaintDiv(props) {
    const message = [
        {
            owner: 'Mohammed Favas',
            id: '12345',
            images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYS-k-JQ89KtOpNSN1a2XydTIXRX_tMtUI0A&usqp=CAU', 'https://fscl01.fonpit.de/userfiles/7446224/image/apple-iphone-14-pro-max-sample-photos/nextpit_apple_iphone_14_pro_max_review_day_1.1.JPEG'],
            title: 'This is title',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
            isSolved: false
        }, {
            owner: 'saleel mhd',
            id: '12345',
            images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYS-k-JQ89KtOpNSN1a2XydTIXRX_tMtUI0A&usqp=CAU', 'https://fscl01.fonpit.de/userfiles/7446224/image/apple-iphone-14-pro-max-sample-photos/nextpit_apple_iphone_14_pro_max_review_day_1.1.JPEG'],
            title: 'This is title',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
            isSolved: true
        }
    ]

    const [complaints, setcomplaints] = useState([]);
    const userCont = useContext(UserContext);
    const [isLoaded, setIsLoaded] = useState(false);
    const user = userCont.user;

    useEffect(
        () => {
            const onLoad = async () => {
                try {
                    if (user.wardOId) {
                        setIsLoaded(false)
                        const res = await axios.get(`${SERVER_ADDRESS}/user/getComplaintsByWard/${user.wardOId}`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '' } })
                        setcomplaints(res.data.announcements);
                        setIsLoaded(true);

                    }
                } catch (err) {
                    console.log(err);
                    const msg = checkLoggedIn(err);
                    if (msg) {
                        alert(msg)
                    }

                }
            }
            onLoad();
        }
        , [user.wardOId, props.updateUi]
    );

    return (
        <>

            {
                isLoaded ?
                    complaints.length === 0 ?
                        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', color: 'gray', fontWeight: '700' }}>
                            No Complaints Yet
                        </div> : <div style={{ height: '100%', width: '100%' }}>

                            {
                                complaints.map(
                                    (complaint) => {
                                        return <ComplaintTemplate value={complaint} />
                                    }
                                )
                            }
                        </div>
                    :
                    <SimpleLoadingScreen />
            }
        </>
    );
}


export const ComplaintSection = React.memo(ComplaintDiv)