import React, { useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { ComplaintSection } from './ComplaintDiv'
import { AiOutlinePlus } from 'react-icons/ai';
import { ShowAddComplaintModel } from './Model';
import { RoundedIconButton } from '../../../../../../components/PlaneButton1';
import { DropdownTop } from './component';

export function UserComplaintPage() {
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
        <ComplaintSection updateUi = {updateUi} />
      </DivScrollableWithGeasture>
      <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton onClick={showAddProjectModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
      <ShowAddComplaintModel changeUi={()=>setUpdateUi(!updateUi)} show={showAddProjectModel} onClose={closeAddProjectModelFun} />
    </UnderNavigationOuterDiv>
  )
}
