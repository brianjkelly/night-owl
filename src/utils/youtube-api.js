import axios from 'axios';

const KEY = "AIzaSyAPRVWL4A_0cBlL6tvPHLgYUfFL3pGvAgg"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        maxResults: 5,
        id: { kind: "youtube#video" },
        type: "video",
        videoDefinition: "high",
        videoEmbeddable: "true",
        order: "viewCount",
        key: KEY   
    }
});