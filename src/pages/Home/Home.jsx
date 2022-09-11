import React from "react";
import AddSection from "../../components/Home/AddSection";
import HomeHero from "../../components/Home/Hero/index";
import "./styles.css";

const Home = () => {
    return (
        <div className="homeContainer">
            <HomeHero />
            <AddSection />
        </div>
    );
};

export default Home;
