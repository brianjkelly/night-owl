const axios = require('axios');

module.exports = {
    search
}

async function search(req, res) {
    const rootURL = 'https://www.googleapis.com/youtube/v3' + req.url;
    const KEY = process.env.API_KEY;
    console.log('running search');
    try {
        const response = await axios.get(
            rootURL, {
            params: {
                part: "snippet",
                maxResults: 6,
                id: { kind: "youtube#video" },
                type: "video",
                videoDefinition: "high",
                videoEmbeddable: "true",
                order: "viewCount",
                key: KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}