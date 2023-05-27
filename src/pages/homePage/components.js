import React from "react";
import { Link } from "react-router-dom";
import { NavLink, Nav ,Button} from 'react-bootstrap';


export function NavText(props) {

    const navtext = { "fontFamily": "'Alumni Sans'", "fontStyle": "normal", "fontWeight": "600", "fontSize": "21px", "color": "#000000", "textShadow": "1px 2px 6px rgba(0, 0, 0, 0.28)" }

    return (
        <Nav.Link href={props.link} style={navtext}>{props.children}</Nav.Link>
    )
}

export function RectangleButton(props){

    //props
    //width - width of button

    const buttonStyle = {"background":"#81F14D","borderStyle":"none","boxShadow":"6px 4px 8px -2px rgba(0, 0, 0, 0.08)","minWidth":'100px',"width":props.width,"fontFamily":"'Alumni Sans'","fontStyle":"normal","fontWeight":"600","fontSize":"24px","color":"#FFFFFF","textShadow":"6px 4px 8px rgba(0, 0, 0, 0.08)"}

    return (
        <Button  style={buttonStyle} >{props.children}</Button>
    );
}