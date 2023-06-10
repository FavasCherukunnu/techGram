import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv, UnderNavigationOuterDivScrollable } from '../../../../../../components/divisions'
import { AnnouncementTemplate } from './component'
import { AnnoucementSection } from './AnoucementDiv'

export function UserAnnoucementPage() {
  
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <AnnoucementSection/>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
