import React, { useState } from 'react'
import './styles.css'

const AboutusNewsletter = () => {

    const [newsletterData, setNewsletterData]   = useState({name:"", email:""})
    console.log(newsletterData)

    const handleChange = (event) => {
        const {name, value} = event.target
        setNewsletterData(prevData => {
            return {
                ...prevData,
                [name]:value
            }
        })
    };

    const handleSubmit  = (event) => {
        event.preventDefault();

        if(newsletterData.email.includes("@") && newsletterData.email.includes(".com")){
            alert(`${newsletterData.name}, thanks for joining our newsletter. You will soon recieve it at ${newsletterData.email}`)
        }else{
            alert("Invalid credentials")
        }
        
        window.location.reload()
    }

    return (
        <div className="newsletterContainer" id="newsletter">
            <div className="newsletter">
                <h3 className="newsletterTitle">Join our newsletter! </h3>
                <form action="" className="newsletterForm">
                    <div>
                        <input
                            className="newsletterInput"
                            name="name"
                            type="text"
                            placeholder="Enter your Name!"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            className="newsletterInput"
                            name="email"
                            type="email"
                            placeholder="Enter your email!"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="btnContainer">
                        <button
                            className="newsletterBtn"
                            onClick={handleSubmit}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AboutusNewsletter