import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { ComplaintTemplate } from './component'
import { ComplaintSection } from './ComplaintDiv'

export function UserComplaintPage() {
  
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <ComplaintSection/>
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
