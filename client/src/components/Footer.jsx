import React from "react";
import Logo from "../img/logo.svg";

const Footer = () => {  
    return (
        <footer>
            <img src={Logo} alt="logo" />
            <span>
                Sports24 Blog. All rights reserved. Follow us on Facebook, Twitter, and Instagram.
            </span>
        </footer>
    );
}   

export default Footer