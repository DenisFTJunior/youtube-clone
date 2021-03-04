import Video from "./video"

function videoList({videos}){
    return (<>{videos?.map(video => <Video img= {video.img} tittle = {video.tittle}
       channel ={video.channel} views = {video.views} dateAgo = {video.dateAgo}/>)}</>)
}

export default videoList