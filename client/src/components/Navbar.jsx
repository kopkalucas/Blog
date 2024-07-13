import React, { useContext } from "react";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {  

    const { currentUser, logout } = useContext(AuthContext);


    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=football">
                        <h6>Football</h6>
                    </Link>
                    <Link className="link" to="/?cat=basketball">
                        <h6>Basketball</h6>
                    </Link>
                    <Link className="link" to="/?cat=valleyball">
                        <h6>Valleyball</h6>
                    </Link>
                    <Link className="link" to="/?cat=tennis">
                        <h6>Tennis</h6>
                    </Link>
                    <Link className="link" to="/?cat=boxing">
                        <h6>Boxing</h6>
                    </Link>
                    <Link className="link" to="/?cat=motorsport">
                        <h6>Motorsport</h6>
                    </Link>
                    <Link className="link" to="/?cat=esport">
                        <h6>E-sport</h6>
                    </Link>
                    <span>{currentUser?.username}</span>
                    { currentUser ? <span onClick={logout}>Logout</span> : <Link className="link" to="/login">Login</Link>}
                    <span className="write">
                        <Link className="link" to="/write">
                            Write
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}   

export default Navbar