import React from "react";
import { PostTemplate } from "./component";

function PostSection() {
    
    const message = {
        owner: 'Mohammed Favas',
        id: '12345',
        images: [],
        title: 'This is title',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
    }

    return <div style={{ width: '100%', height: '100%' }}>

        <PostTemplate value={message} />
        <PostTemplate value={message} />
        <PostTemplate value={message} />
    </div>
}

export default React.memo(PostSection);