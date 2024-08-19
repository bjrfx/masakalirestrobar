import React from 'react'

const ContactForm = () => {
  return (
    <div className="col-md-6 ">
                            <h3>Get In Touch</h3>
                            <form action="#">
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="sr-only" for="name">Name</label>
                                        <input type="text" id="name" className="form-control" placeholder="Your firstname" />
                                    </div>

                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="sr-only" for="email">Email</label>
                                        <input type="text" id="email" className="form-control" placeholder="Your email address" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="sr-only" for="message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Write us something"></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-primary" />
                                </div>

                            </form>
                        </div>
  )
}

export default ContactForm