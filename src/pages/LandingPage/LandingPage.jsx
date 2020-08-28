import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import NightOwlLogo from '../../components/NightOwlLogo/NightOwlLogo';
import './LandingPage.css';



const LandingPage = (props) => {
    return (
        <div className="LandingPage">
            <div><NightOwlLogo /></div>
            <div>
                <NavBar
                    user={props.user}
                    handleLogout={props.handleLogout}
                />
            </div>
        </div>
    );
}

export default LandingPage;