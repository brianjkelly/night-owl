const youtubeApi = (keyword) => {
    return fetch("/api/videos/search?q=" + keyword, {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" }),
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Video invalid');
    });
}


export default youtubeApi;