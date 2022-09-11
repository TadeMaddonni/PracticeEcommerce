import React from "react";
import "./styles.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
    return (
        <footer>
            <p className="footerText">All rights reserved @2022</p>
            <div className="socialMediaContainer">
                <span className="socialMediaAdd">follow our socials</span>

                <div className="socialMediaFooterContainer">
                    <a href="https://twitter.com" target="_blank">
                        <InstagramIcon />
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <TwitterIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
