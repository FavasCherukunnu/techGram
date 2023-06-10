import React from 'react'
import { PostTemplate, RoundedIconButton } from '../../../homePage/component'
import { PlaneButton } from '../../../../../../components/planeButton'
import { AiOutlinePlus } from 'react-icons/ai'
import './WardInfoPageHome.css'
import { NotificatonTemplate, WardDetailsTable } from './component'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { DivScrollableWithGeasture, DivScrollableWithGeasture2 } from '../../../../../../components/divisions'
import { ChatSection } from './ChatDiv'
import { NotificationSection } from './NotificationDiv'



function ChatDiv(props) {
  const smallScreen = props.smallScreen;
  const style = { "width": smallScreen ? '100%' : "60%", "height": smallScreen ? "calc(100% - 65px)" : "100%","position": "relative", "overflow": "hidden" }

  return (
    <div style={style}>
      <DivScrollableWithGeasture>
        <ChatSection/>
      </DivScrollableWithGeasture>
      {/* <div className='user_home_postDiv'>
          
      </div> */}
      <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton><AiOutlinePlus size={25} /></RoundedIconButton></div>
    </div>
  );
}

function NotificationDiv(props) {

  const smallScreen = props.smallScreen;
  const user_wardInfo_RightOuter = { "paddingLeft": smallScreen ? '' : "15px", "width": smallScreen ? '100%' : "40%", "height": smallScreen ? 'calc(100% - 65px)' : "100%", "overflow": "hidden" }
  return (
    <div style={user_wardInfo_RightOuter}>
      {/* <div className='user_wardInfo_innerDiv2'> */}
      <DivScrollableWithGeasture id={'sample2'}>
        <NotificationSection/>        
      </DivScrollableWithGeasture>
      {/* </div> */}
    </div>
  );
}


function TopNav(props) {

  let isSelected = false;

  if (props.val === props.setVal) {
    isSelected = true;
  }
  const user_info_topNav_content = { padding: '10px', "height": "50px", "width": "50%", "borderWidth": isSelected ? "1px 1.8px 0px 1px" : '', "borderStyle": isSelected ? "solid" : '', "borderColor": isSelected ? "rgba(0, 0, 0, 0.3)" : '', "borderRadius": "12px 12px 0px 0px", "backgroundColor": isSelected ? "rgb(255, 255, 255)" : '', fontFamily: 'Alumni Sans', fontWeight: isSelected ? '700' : '600', fontSize: '21px' }

  return (
    <div onClick={() => { props.onClick(props.val) }} style={user_info_topNav_content}>{props.children}</div>
  );
}


export function UserWardInfoPageHome() {


  const [smallScreen, setSmallScreen] = useState(false);
  const style = { "height": "calc(100% - 50px)", "width": "100%", "padding": "15px", "overflow": "hidden", "display": smallScreen ? ' ' : "flex" }
  const [val, SetVal] = useState(1)

  function handleWindowResize() {
    if (window.innerWidth < 1100) {
      setSmallScreen(true)
    } else {
      setSmallScreen(false);
    }
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  },)

  const click = (value) => {
    SetVal(value);
  }

  const render = () => {
    if (val === 1) {
      return (<NotificationDiv smallScreen={smallScreen} />);
    } else {
      return <ChatDiv smallScreen={smallScreen} />;
    }
  }

  if (smallScreen) {
    return (
      <div style={style}>
        <div className='user_info_topNav'>
          <TopNav onClick={click} setVal={val} val={1}>Details</TopNav>
          <TopNav onClick={click} setVal={val} val={2}>Gallery</TopNav>
        </div>
        {/* <NotificationDiv smallScreen={smallScreen} /> */}

        {
          render()
        }
      </div>

    );
  } else {
    return (
      <div style={style}>
        <ChatDiv smallScreen={smallScreen} />
        <NotificationDiv smallScreen={smallScreen} />
      </div>
    )
  }
}
