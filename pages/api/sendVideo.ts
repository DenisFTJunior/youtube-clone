import data from "./data/videoData.json"

export default function handler(req, res) {
    return res.status(200).send(data.videos)
}