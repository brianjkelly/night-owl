import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import NightOwlLogo from '../../components/NightOwlLogo/NightOwlLogo';
import './LandingPage.css';



const LandingPage = (props) => {
    return (
        <div className="LandingPage">
            <div><NightOwlLogo /></div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
        </div>
    );
}

export default LandingPage;