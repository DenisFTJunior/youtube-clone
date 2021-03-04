import Video from "../class/video"

export default async function VideoList(){
    const res = await fetch("htpp://localhost:3000/api/sendVideo") 
    const json = await res.json
    return json
}