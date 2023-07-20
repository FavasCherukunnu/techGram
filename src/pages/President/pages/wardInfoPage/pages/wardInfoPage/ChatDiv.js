import React, { useContext, useEffect, useState } from 'react'
import { PostTemplate, PostTemplateWithCarousel } from '../../../homePage/component'
import axios from 'axios';
import { SERVER_ADDRESS } from '../../../../../../staticFiles/constants';
import { UserContext } from '../../../../../user/userHomePage';
import { checkLoggedIn, getUserToken } from '../../../../../../staticFiles/functions';

export function ChatDiv1(props) {

  const [posts, setPosts] = useState([]);
  const user = props.user;
  console.log('rebuilding chat div');

  useEffect(
    () => {
      const onLoad = async () => {
        try {
          const res = await axios.get(`${SERVER_ADDRESS}/user/getGallaryPostsByWard`, { headers: { 'u-auth-token': getUserToken() }, params: { wardOId:user.wardOId,panchayathOId:user.panchayathOId } })
          setPosts(res.data.posts);
        } catch (err) {
          console.log(err);
          checkLoggedIn(err);
        }
      }
      onLoad();
    }
    , [user.wardOId]
  )

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {
        posts.map(
          (post,index) => {
            return <PostTemplateWithCarousel key={index} value={post} />
          }
        )
      }
    </div>
  )
}


const ChatSection = React.memo(ChatDiv1)

export { ChatSection }