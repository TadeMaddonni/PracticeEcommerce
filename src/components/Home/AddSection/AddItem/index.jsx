import React from "react";
import {Link} from 'react-router-dom'
import "./styles.css";

const AddItem = (props) => {
    const styles = {
        backgroundColor: props.background,
        color: props.color,
    };

    return (
        <Link className="noUnderline" to={`/${props.page}`}>
            <div
                className={
                    props.color === "red" ? "addCard redCard" : "addCard"
                }
            >
                <h3 className="addTitle">{props.title}</h3>
                <p className="addText">{props.text}</p>
            </div>
        </Link>
    );
};

export default AddItem;
