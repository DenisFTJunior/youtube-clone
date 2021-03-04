
import Image from "next/image";
import style from "../../styles/Video.module.css"
import { useState, useEffect } from 'react';

export default function  Video({img, tittle,channel,views,dateAgo}) { 
  
     return (
        <div className = {style.containerVideo}>
            <div className = {style.imgVideo}><Image src={img} alt="video" width="" height=""></Image></div>
            <div className = {style.infoVideo}> 
                <div className = {style.channelLogo}><Image src={channel.logoSrc} alt="Channel Logo" width="108" height="108" /></div>
                <h3 className = {style.tittleVideo}>{tittle}</h3>
                <span className={style.channelName}>{channel.name}</span>
                <span className = {style.viewsVideo}>{views} views</span>
                <span className = {style.dateAgo}></span>   
            </div>
        </div>
    );
}



