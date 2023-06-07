import React from 'react'
import './HomePage.css'
import { PostTemplate, RoundedIconButton } from './component'
import { AiOutlinePlus } from 'react-icons/ai';

export function UserHomePage() {

  const message = {
    owner: 'Mohammed Favas',
    id: '12345',
    images: ['https://assets.simpleviewinc.com/simpleview/image/upload/crm/bloomington/Sample-Gates_4478802b-5056-a36a-06180ee91f953fc5.jpg', 'https://fscl01.fonpit.de/userfiles/7446224/image/apple-iphone-14-pro-max-sample-photos/nextpit_apple_iphone_14_pro_max_review_day_1.1.JPEG'],
    title: 'This is title',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
  }

  return (
    <div className='user_homePage_outerDiv'>
      <div className='user_homePage_innerDiv'>
        <div className='user_home_postDiv'>
          <PostTemplate value={message} />
          <PostTemplate value={message} />
          <PostTemplate value={message} />
        </div>
        <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton><AiOutlinePlus size={25} /></RoundedIconButton></div>

        {/* <PostTemplate/> */}
      </div>
    </div>
  )
}

