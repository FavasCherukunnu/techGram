import React from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { ComplaintSection } from './ComplaintDiv'
import { DropdownTop } from './component'
import { useState } from 'react';

export function PresidentComplaintPage() {
  const [showAddProjectModel , setShowAddProjectModel] = useState(false);
  const [updateUi,setUpdateUi] = useState(false);
  function showAddProjectModelFun(){
    setShowAddProjectModel(true);
  }
  function closeAddProjectModelFun(){
    setShowAddProjectModel(false);
  }

  return (
    <UnderNavigationOuterDiv>
      <DropdownTop/>
      <DivScrollableWithGeasture height='calc(100% - 45px)'>
        <ComplaintSection />
      </DivScrollableWithGeasture>
    </UnderNavigationOuterDiv>
  )
}
