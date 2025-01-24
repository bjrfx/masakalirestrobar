import React, { useState } from 'react';
import { db } from '../../config/firebase'; // Import your Firebase configuration
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
  const [thankYouMessage, setThankYouMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionStatus(null);

    try {
      const docRef = await addDoc(collection(db, 'contactForm'), formData); // 'contactForm' is your Firestore collection name
      console.log('Document written with ID: ', docRef.id);
      setLoading(false);
      setSubmissionStatus('success');
      setThankYouMessage(`Thank you, ${formData.name}! Your message has been received.`);
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error adding document: ', error);
      setLoading(false);
      setSubmissionStatus('error');
      setThankYouMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="col-md-6">
      <h3>Get In Touch</h3>
      <form onSubmit={handleSubmit}>
        <div className="row form-group">
          <div className="col-md-12">
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Your firstname"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row form-group">
          <div className="col-md-12">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row form-group">
          <div className="col-md-12">
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="form-control"
              placeholder="Write us something"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <span className="spinner-border spinner-border-sm"></span> // Bootstrap spinner
            ) : submissionStatus === 'success' ? (
              '✔'
            ) : submissionStatus === 'error' ? (
              '✖'
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>

      {thankYouMessage && (
        <div className="mt-3">
          <p>{thankYouMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;