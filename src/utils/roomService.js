function createRoom(leader) {
    console.log(leader.name);
    return fetch('/api/rooms/', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ name: leader.name })
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Room creation failed');
    });
}


export default {
    createRoom,
};
