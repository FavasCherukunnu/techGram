import React, { useState } from "react";
import { NavLink, Nav ,Button} from 'react-bootstrap';

export function RectangleButton(props){

    //props
    //width - width of button
    const [isHoverded, setHover] = useState(false);
    const buttonStyle = {style:{background:isHoverded===false?'#81F14D':'#76db47',borderStyle:"none",boxShadow:"6px 4px 8px -2px rgba(0, 0, 0, 0.1)",minWidth:'100px',"width":props.width,fontFamily:"'Alumni Sans'",fontStyle:"normal",fontWeight:"600",fontSize:"24px",color:"#FFFFFF",textShadow:"6px 4px 8px rgba(0, 0, 0, 0.08)"}}

    function mouseOverEvent(){
        setHover(true);
    }

    function mouseLeaveEvent(){
        setHover(false);
    }
    
    return (
        <Button style={buttonStyle.style} onMouseEnter={mouseOverEvent} onMouseLeave={mouseLeaveEvent} onClick={props.onClick}>{props.children}</Button>
    );
}