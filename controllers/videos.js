const axios = require('axios');
const { google } = require('googleapis');

module.exports = {
    search
}

async function search(req, res) {
    const extURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=daddy&key=${process.env.API_KEY}`;
    const rootURL = 'https://www.googleapis.com/youtube/v3/search';
    const KEY = process.env.API_KEY;
    console.log('running search');
    try {
        const response = await axios.get(
            rootURL, {
                params: {
                    part: "snippet",
                    maxResults: 5,
                    id: { kind: "youtube#video" },
                    type: "video",
                    videoDefinition: "high",
                    videoEmbeddable: "true",
                    order: "viewCount",
                    q: "daddy",
                    key: KEY
                }
            });
        // console.log(response);
        res.json(response);
    } catch (error) {
        res.status(400).json(error);
    }
    // ).then(response => {
    //     return (response);
    // }).catch(error => {
    //     console.log(error);
    // })
}