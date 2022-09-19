import React from "react";
import img from "../../../assets/aboutus1.png";
import "./styles.css";

const AboutusSecondSection = () => {
    return (
        <div className="aboutusFirstSection">
            <div className="firstSectionContainer">
                <img className="firstSectionImg" src={img} alt="" />
                <div className="sectionTwoContainer">
                    <p className="firstSectionText">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptates corporis magnam ea, ratione repellat
                        deleniti esse totam perferendis ab aliquid laborum
                        excepturi, amet expedita consequatur unde libero saepe a
                        atque.
                    </p>
                    <a href="#newsletter">
                        <button className="aboutUsBtn">
                            Want to know more?
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutusSecondSection;
