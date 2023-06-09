import React from 'react'
import { UnderNavigationOuterDiv, UnderNavigationOuterDivScrollable } from '../../../../../../components/divisions'
import { AnnouncementTemplate } from './component'

export function UserAnnoucementPage() {
  const message = {
    owner: 'Mohammed Favas',
    id: '12345',
    images: [`${__dirname}/assets/images/sample3`, 'https://www.entemalappuram.com/wp-content/uploads/2019/06/edavanna-panchayath-office-number.jpg'],
    title: 'This is title',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
  }
  return (
    <UnderNavigationOuterDivScrollable>
      <AnnouncementTemplate value={message}/>
      <AnnouncementTemplate value={message}/>
      <AnnouncementTemplate value={message}/>
      <AnnouncementTemplate value={message}/>
    </UnderNavigationOuterDivScrollable>
  )
}
