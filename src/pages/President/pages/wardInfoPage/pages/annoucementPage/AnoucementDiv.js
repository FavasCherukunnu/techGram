import React from 'react'
import { AnnouncementTemplate } from './component';
import  { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../user/userHomePage";
import axios from "axios";
import { SERVER_ADDRESS } from "../../../../../../staticFiles/constants";
import { checkLoggedIn, getUserToken } from "../../../../../../staticFiles/functions";

export function AnnoucementSection(props) {

    const [annoucements, setannoucements] = useState([]);
    const userCont = useContext(UserContext);
    const [isLoaded, setIsLoaded] = useState(false);
    const user = userCont.user;
    useEffect(
        () => {
          const onLoad = async () => {
            try {
              if (user.wardOId) {
                setIsLoaded(false)
                const res = await axios.get(`${SERVER_ADDRESS}/user/getAnnouncementsByWard/${user.wardOId}`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '' } })
                setannoucements(res.data.announcements);
                setIsLoaded(true)
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
        , [user.wardOId,props.updateUi]
      )
    return (
        <div style={{ height: '100%', width: '100%' }}>
            
            {
                annoucements.map(
                    (annoucement) => {
                      return <AnnouncementTemplate value={annoucement} />
                    }
                  )
            }
        </div>
    )
}

// export const AnnoucementSection = React.memo(AnoucementDiv)