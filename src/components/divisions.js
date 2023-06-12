import React, { useContext, useEffect } from "react";
import { MyContext } from "../pages/user/userHomePage";
import './divisions.css'

export function UnderNavigationOuterDiv(props) {

    const style = { "height":props.height?props.height: "calc(100% - 50px)", "width": "100%", "overflow": "hidden" }

    return (
        <div style={style} className="UnderNavigationOuterDiv_mainouter">
            <div style={{ "width": "100%", "height": "100%", "position": "relative", "overflow": "hidden" }} >
                {props.children}
            </div>
        </div>);
}

export function UnderNavigationOuterDivScrollable(props) {
    return <UnderNavigationOuterDiv>

        <div style={{ maxHeight: '100%', width: '100%', overflowY: 'auto' }}>
            {props.children}
        </div>
    </UnderNavigationOuterDiv>

}


export function DivScrollableWithGeasture(props) {
    //width
    //id
    //height

    const callback = useContext(MyContext);
    const id = props.id ? props.id : 'sample123'

    useEffect(() => {
        let previousScrollPosition = 0;
        let currentScrollPosition = 0;
        let obj = document.getElementById(id);

        obj.addEventListener('scroll', (e) => {
            // Get the new Value
            currentScrollPosition = Math.round(obj.scrollTop);
            // console.log(currentScrollPosition);
            //Subtract the two and conclude
            if (currentScrollPosition > previousScrollPosition) {
                callback(true);
            } else if ((currentScrollPosition + 20) < previousScrollPosition) {
                callback(false);
            }
            // else if(currentScrollPosition===0){
            //     callback(false)
            // }

            // Update the previous value
            if (previousScrollPosition !== currentScrollPosition) {
                previousScrollPosition = currentScrollPosition;
            }
        });
    }, []);

    return (
        <div style={{ "height": props.height ? props.height : "100%", "width": props.width ? props.width : "100%", "overflow": "hidden" }}>
            <div className="DivScrollableWithGeasture_innerDiv" style={props.isNotStyleChangable ? { "width": "100%", "height": "100%", "background": "#FFFFFF", "border": "1px solid rgba(0, 0, 0, 0.3)", "boxShadow": "inset 0px 0px 14px -3px rgba(0, 0, 0, 0.24)", "borderRadius": "12px", "overflow": "hidden" } : {}}>
                <div id={id} style={{ maxHeight: '100%', overflowY: 'auto' }} className="DivScrollableWithGeasture_InnerInnerDiv" >
                    {props.children}
                </div>
            </div>
        </div>);

}
