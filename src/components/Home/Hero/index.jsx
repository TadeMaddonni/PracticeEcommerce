import React from "react";
import "./styles.css";
const HomeHero = () => {
    return (
        <div className="heroContainer">
            <h1 className="heroTitle">Welcome!</h1>
            <div className="heroTextContainer">
                <p>
                    Enjoy your shopping, we are on
                    <span className="heroSale">SALE</span>
                </p>
            </div>
        </div>
    );
};

export default HomeHero;
