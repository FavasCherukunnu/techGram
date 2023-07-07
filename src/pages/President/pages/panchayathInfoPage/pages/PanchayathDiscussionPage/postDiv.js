import React from 'react'
import { PostTemplate } from '../../../homePage/component'

function PostDiv() {
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

export const PostSection = React.memo(PostDiv);
