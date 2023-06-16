import React from 'react'
import { DivScrollableWithGeasture, DivScrollableWithGeastureP0, UnderNavigationOuterDiv } from '../../../../components/divisions'
import './memberUserRegistration.css'
import { SurvayList } from './component'
export function PresidentMemberRegistration() {
    return (
        <UnderNavigationOuterDiv isNotStyleChangable height='100%'>
            <div className='member_userRegistrationPage_topHeadDiv'>
                <div className='title'>User Registration</div>
            </div>
            <DivScrollableWithGeastureP0  height='calc(100% - 45px)' isNotStyleChangable>
                <SurvayList/>
            </DivScrollableWithGeastureP0>
        </UnderNavigationOuterDiv>
    )
}
