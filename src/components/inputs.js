import React from 'react'
import './inputs.css'

export  function PitInput(props) {
  return (
    <div style={{width:props.width?props.width:'100%'}}>
        <input style={{height:props.height?props.height:''}} className='component_pitInput' placeholder={props.placeholder} onChange={(e)=>{props.onChange(e)}}></input>
    </div>
  )
}

export function PitInputLabelled(props){
  return(
    <div style={{paddingTop:'20px',width:props.width?props.width:'100%',paddingBottom:'5px'}}>
        <p className="inputTitleFont">{props.inputTitle}</p>
        <input accept={props.accept?props.accept:null} name={props.name} multiple={props.multiple?true:false} onChange={(e)=>props.onChange(e)} style={{height:props.height?props.height:''}} className='component_pitInput' placeholder={props.placeholder} type={props.type} value={props.value} {...props.reg}></input>
    </div>
);
}

export function PitTextAreaLabelled(props){
  return(
    <div style={{paddingTop:props.padding?'':'20px',width:props.width?props.width:'100%',paddingBottom:'5px'}}>
        <p className="inputTitleFont">{props.inputTitle}</p>
        <textarea style={{height:props.height?props.height:''}} className='component_pitInput' placeholder={props.placeholder} rows={props.rows} {...props.reg}></textarea>
        <p className="PitTextAreaLabelled_errorText">{props.error?.message}</p>
    </div>
);
}