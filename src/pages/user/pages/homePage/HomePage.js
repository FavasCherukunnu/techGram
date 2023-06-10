import React, { useContext, useEffect } from 'react'
import './HomePage.css'
import { PostTemplate, RoundedIconButton } from './component'
import { AiOutlinePlus } from 'react-icons/ai';
import { MyContext } from '../../userHomePage';
import ChatSection from './ChatSection';
import { DivScrollableWithGeasture } from '../../../../components/divisions';



export function UserHomePage() {




  // callback(true);

  return (

    <div style={{width:'100%',height:'100%',position:"relative",padding:'15px'}}>

      <DivScrollableWithGeasture>

        <ChatSection />
      </DivScrollableWithGeasture>
      <div style={{ position: 'absolute', bottom: '35px', right: '15px' }}><RoundedIconButton><AiOutlinePlus size={25} /></RoundedIconButton></div>
    </div>




  )
}
