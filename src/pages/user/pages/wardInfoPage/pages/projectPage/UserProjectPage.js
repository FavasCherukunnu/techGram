import React from 'react'
import './UserProjectPage.css'
import { RoundedIconButton } from '../../../homePage/component'
import { AiOutlinePlus } from 'react-icons/ai'
import { PostTemplate } from './component'
import { UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { DivScrollableWithGeasture } from '../../../../../../components/divisions'
import { ProjectSection } from './ProjectDiv'

export function UserProjectPage() {
  
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <ProjectSection/>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
