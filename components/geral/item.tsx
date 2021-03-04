import { useState, useEffect } from 'react';
import Image from "next/image"
import { time } from "console"

export default function Item(props){
    const [src,setSrc] = useState(props.src)
    const [classeHover,setClasseHover] = useState(props.style.none)
    const [dir,ter] = props.src.split(".")
    const [visibility, setVisibility] = useState(props.style.containerItem)

    useEffect(()=>{
        if(!props.visible){
            setVisibility(props.style.none)
        }
        if(props.select){
            setSrc(`${dir}-hover.${ter}`)
        }
    })

    return(
        <div className = {visibility}>
            <div className = {props.style.item} 
            onMouseOver = {()=> {setClasseHover(props.style.over)}} onMouseOut={()=> {setClasseHover(props.style.none)}}>
                <div className ={props.style.iconStyle}><Image src={src} alt = "menu item" width = "108px" height="108px"></Image></div>
                <span className = {props.style.textIcon}>{props.text}</span>
            </div>
            <div className={classeHover}><span className = {props.style.overText}>{props.text}</span></div>
        </div>
    )
}