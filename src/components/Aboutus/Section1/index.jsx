import React from "react";
import "./styles.css";
import img from "../../../assets/aboutus1.jpg";

const AboutusFirstSection = () => {
    return (
        <div className="aboutusFirstSection">
            <div className="firstSectionContainer">
                <p className="firstSectionText">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptates corporis magnam ea, ratione repellat deleniti
                    esse totam perferendis ab aliquid laborum excepturi, amet
                    expedita consequatur unde libero saepe a atque.
                </p>
                <img className="firstSectionImg" src={img} alt="" />
            </div>
        </div>
    );
};
export default AboutusFirstSection;
