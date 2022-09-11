import React from "react";
import AddItem from "./AddItem/index";
import "./styles.css";

const AddSection = () => {
    return (
        <div className="addSection">
            <AddItem
                title="See our products!"
                text="Sales up to 60%!"
                background="black"
                color="white"
                page="store"
            />
            <AddItem
                title="Contact us!"
                text="Leave your comments, sign up for the newsletter & more!"
                color="red"
                page="contact"
            />
            <AddItem
                title="Let's meet"
                text="Found out about the creators of the store!. Also follow our social media"
                color="red"
                page="about"
            />
            <AddItem
                title="Find out about new products!"
                text="See all the new catalog since September 20th!"
                page="contact"
            />
        </div>
    );
};

export default AddSection;
