import React from 'react'
import { PostTemplate } from '../../../homePage/component'

export function ChatDiv1() {
  console.log('rebuilding notificaton div');

    const message = {
        owner: 'Mohammed Favas',
        id: '12345',
        images: [],
        title: 'This is title',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
      }

  return (
    <div style={{height:'100%',width:'100%'}}>
        <PostTemplate value={message} />
        <PostTemplate value={message} />
        <PostTemplate value={message} />
    </div>
  )
}


const ChatSection = React.memo(ChatDiv1)

export {ChatSection}