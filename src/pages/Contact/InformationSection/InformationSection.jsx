import React from 'react'
import ContactForm from '../ContactForm'
import ContactInformation from '../ContactInformation'

const InformationSection = () => {
    return (
        <div class="gtco-section">
            <div class="gtco-container">
                <div class="row">
                    <div class="col-md-12">
                        <ContactForm />
                        <ContactInformation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationSection