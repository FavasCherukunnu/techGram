import React from "react";


export function UnderNavigationOuterDiv(props) {

    const style = { "height": "calc(100% - 50px)", "width": "100%", "padding": "15px", "overflow": "hidden" }

    return (
        <div style={style}>
            <div style={{ "width": "100%", "height": "100%", "background": "#FFFFFF", "border": "1px solid rgba(0, 0, 0, 0.3)", "boxShadow": "inset 0px 0px 14px -3px rgba(0, 0, 0, 0.24)", "borderRadius": "12px", "position": "relative", "overflow": "hidden" }} >
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