import { useState, useEffect } from 'react';
import VideoList from "../resources/videoResource"

export default async function videos(){
    const [videos,setVideo] = useState(null)
    const videoList = await VideoList()
    useEffect(()=>{
        setVideo(videoList)
    },[])
    return videos
}