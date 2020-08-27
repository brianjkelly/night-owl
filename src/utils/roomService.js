function createRoom(leader) {
    return fetch('/api/rooms/', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ name: leader.name })
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Room creation failed');
    });
}

function queueVideo(id, video) {
    return fetch(`/api/rooms/${id}/queue-video`, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(video)
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Could not add to queue');
    });
}

function deleteQueueVideo(id, payload) {
    return fetch(`/api/rooms/${id}/delete`, {
        method: 'DELETE',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(payload)
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Could not delete from queue');
    });
}

function updateLoadedVideo(id, video) {
    return fetch(`/api/rooms/${id}/`, {
        method: 'PATCH',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(video)
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Could not update loaded video');
    });
}


export default {
    createRoom,
    queueVideo,
    deleteQueueVideo,
    updateLoadedVideo
};
