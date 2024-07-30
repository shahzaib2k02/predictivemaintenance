import React from "react";
import '../Assets/styles/header.css'
import Icon from '../Assets/images/image.png';

const Header = () => {
    return (
        <div className="header">
            <img src={Icon} alt="Parco Icon" className="icon" />
            <div className="header-text">
                <h1>Predictive Maintenance System</h1>
            </div>
        </div>
    );
};

export default Header;
