import React from "react";
import { useState } from "react";
import "./styles.css";

const ContactForm = () => {
    const form = document.getElementsByClassName("form");

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        consult: ""
    })
    console.log(formData)
    const  handleOnChange = (event) => {
        const {name, value} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]:value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        formData.name ? alert(`${formData.name}, your consult will be answered soon by one of our staff!`) : e.preventDefault()
        window.location.reload()
    }
    
    return (
        <div className="formContainer">
            <form className="form" action="">
                <div className="inputContainer">
                    <input
                        className="formInput"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        onChange={handleOnChange}
                        value={formData.name}
                    />
                </div>
                <div className="inputContainer">
                    <input
                        className="formInput"
                        name="surname"
                        type="text"
                        placeholder="Enter your surname"
                        onChange={handleOnChange}
                        value={formData.surname}
                    />
                </div>
                <div className="inputContainer">
                    <textarea
                        className="formInput"
                        name="consult"
                        cols="30"
                        rows="10"
                        onChange={handleOnChange}
                        placeholder="Enter your consult"
                        value={formData.consult}
                    />
                </div>

                <div>
                    <button className="formBtn" type="submit" onClick={(e) => handleSubmit(e)}>Send</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
