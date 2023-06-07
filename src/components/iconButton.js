import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";

export function IconButton(props) {

    const [isHoverded, setHover] = useState(false);
    const style = {backgroundImage:isHoverded?'radial-gradient(rgba(179, 179, 179, 0.522), rgba(211, 211, 209, 0.2), rgba(199, 199, 199, 0))':'',"transition":"all 0.2s","borderRadius":"50px","width":"50px","height":"50px","display":"flex","alignItems":"center","justifyContent":"center"}
  
    function mouseOverEvent(){
      setHover(true);
    }
  
    function mouseLeaveEvent(){
        setHover(false);
    }
    return (<div onMouseEnter={mouseOverEvent} onMouseLeave={mouseLeaveEvent} style={style} onClick={props.onClick}>
      {props.children}
    </div>);
  }