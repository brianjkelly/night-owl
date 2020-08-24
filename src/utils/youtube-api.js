import axios from 'axios';

// const KEY = process.env.API_KEY

const KEY = "AIzaSyAPRVWL4A_0cBlL6tvPHLgYUfFL3pGvAgg"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});