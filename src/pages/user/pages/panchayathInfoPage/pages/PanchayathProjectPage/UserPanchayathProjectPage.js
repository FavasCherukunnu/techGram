import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { ProjectSection } from './ProjectDiv'

export function UserPanchayathProjectPage() {
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <ProjectSection/>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
