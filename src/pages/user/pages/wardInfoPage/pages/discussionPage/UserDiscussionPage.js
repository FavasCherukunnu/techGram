import React from 'react'
import { PostTemplate, RoundedIconButton } from '../../../homePage/component'
import { AiOutlinePlus } from 'react-icons/ai'
import './UserDiscussionPage.css'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { PostSection } from './postDiv'

export function UserDiscussionPage() {

  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
          <PostSection/>
      </DivScrollableWithGeasture>
        <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton><AiOutlinePlus size={25} /></RoundedIconButton></div>

        {/* <PostTemplate/> */}
    </UnderNavigationOuterDiv>
  )
}
