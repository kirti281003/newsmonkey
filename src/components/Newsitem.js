import React from "react";
export default function Newsitem(props)
{
    return(
        <div style={props.cardStyle} className="container ">
        <h4 style={props.myStyle}>{props.title}</h4>
        <img style={props.imageStyle} src={props.image}/>
        <p style={props.myStyle}>{props.desc}</p>

        </div>
    )
}