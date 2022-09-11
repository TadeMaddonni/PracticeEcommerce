import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link className="navLink" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/store">
                        Store
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/about">
                        About us
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/contact">
                        Contact us
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/cart">
                        <CartWidget />
                    </Link>
                </li>
            </ul>

            <div className="socialMediaContainer">
                <a href="https://twitter.com" target="_blank">
                    <InstagramIcon />
                </a>
                <a href="https://twitter.com" target="_blank">
                    <TwitterIcon />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
