import React from 'react'

const ContactInformation = () => {
    return (
        <div className="col-md-5 col-md-push-1">

            <div className="gtco-contact-info">
                <h3>Contact Information</h3>
                <ul>
                    <li className="address">97 Clarence St.,<br /> Ottawa, ON K1N 5P9</li>
                    <li className="phone"><a href="tel://1234567920">+1 (613) 789-6777</a></li>
                    <li className="email"><a href="mailto:contact@masakalirestrobar.ca">contact@masakalirestrobar.ca</a></li>
                    <li className="url"><a href="https://masakalirestrobar.ca">Masakali Restrobar</a></li>
                </ul>
            </div>


        </div>
    )
}

export default ContactInformation