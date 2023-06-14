import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { DropdownTop } from './component'
import { ComplaintSection } from './ComplaintDiv'

export function UserPanchayathComplaintPage() {
  return (
    <UnderNavigationOuterDiv>
      <DropdownTop/>
      <DivScrollableWithGeasture>
        <ComplaintSection />
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
