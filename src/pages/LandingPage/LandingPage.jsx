import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div classname="LandingPage">
            <div> Landing Page </div>
            <Link to='/chat'>Chat now</Link>
        </div>
    );
}

export default LandingPage;