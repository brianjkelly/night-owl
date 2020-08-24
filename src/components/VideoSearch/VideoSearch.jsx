import React from 'react';

const VideoSearch = () => (
    <div className="VideoSearch">
        <div className="VideoSearch-header">
            <h2>Video Search</h2>
        </div>
        <form>
            <input type="text" placeholder="Enter Keyword" /><input type="submit" value="Search" />
        </form>
    </div>
)

export default VideoSearch;