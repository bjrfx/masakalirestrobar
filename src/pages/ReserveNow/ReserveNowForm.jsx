import React, { Fragment, useState } from 'react';
import './ReserveNowForm.css';

const ReserveNowForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    persons: 1,
    startDate: '',
    startTime: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, phoneNumber, persons, startDate, startTime } = formData;

    // Prepare reservation object
    const reservation = {
      name,
      phoneNumber,
      persons: parseInt(persons),
      startDate,
      startTime,
    };

    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservation),
      });

      if (response.ok) {
        setLoading(false);
        setMessage('Reservation successful!');
        setShowConfirmation(true);

        // Automatically hide the confirmation message after 5 seconds
        setTimeout(() => {
          setFormData({ name: '', phoneNumber: '', persons: 1, startDate: '', startTime: '' });
          setShowConfirmation(false); // Hide confirmation message after 5 seconds
        }, 10000);  // 10000ms = 10 seconds
      } else {
        const errorResponse = await response.json();
        setLoading(false);
        setMessage(`Failed to make reservation: ${errorResponse.message}`);
      }
    } catch (error) {
      setLoading(false);
      setMessage(`Failed to make reservation: ${error.message}`);
    }
  };

  return (
    <Fragment>
      <div id="booking" className="section" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/p/AF1QipNQrKjzaikXB-mLOh8aLy4f8GPF1x8Fj06P6T5w=s1360-w1360-h1020)' }}>
        <div className="section-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="booking-form" style={{ marginTop: '30%' }}>
                  <h2 className="text-center">Reserve Your Table</h2>

                  {showConfirmation && (
                    <div className="alert alert-success">
                      <h4>Thank you for your reservation, {formData.name}!</h4>
                      <p>Your reservation is set for {formData.startDate} at {formData.startTime}.</p>
                    </div>
                  )}

                  {!showConfirmation && (
                    <form onSubmit={handleSubmit}>
                      {message && <p className="alert alert-info">{message}</p>}
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phoneNumber"
                          placeholder="Enter your phone number"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Number of Persons</label>
                        <input
                          type="number"
                          className="form-control"
                          name="persons"
                          value={formData.persons}
                          min="1"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Time</label>
                        <input
                          type="time"
                          className="form-control"
                          name="startTime"
                          value={formData.startTime}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-btn">
                        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                          {loading ? (
                            <span className="spinner-border spinner-border-sm"></span>
                          ) : (
                            'Reserve Now'
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ReserveNowForm;