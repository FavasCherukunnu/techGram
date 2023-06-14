import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { ComplaintSection } from './ComplaintDiv'
import { DropdownTop } from './component'

export function UserComplaintPage() {

  return (
    <UnderNavigationOuterDiv>
      <DropdownTop/>
      <DivScrollableWithGeasture>
        <ComplaintSection />
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
