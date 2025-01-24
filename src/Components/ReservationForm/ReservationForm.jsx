import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { db } from '../../config/firebase'; // Import Firestore instance
import { collection, addDoc } from 'firebase/firestore';
import './ReservationForm.css';

const CustomInput = React.forwardRef(({ value, onClick, onChange, placeholder }, ref) => (
  <input
    value={value}
    onClick={onClick}
    onChange={onChange}
    ref={ref}
    placeholder={placeholder}
    className="form-control"
    style={{ color: 'black', backgroundColor: 'transparent', borderColor: '#f9f9f9' }}
  />
));

const CustomSelect = ({ value, onChange, options }) => (
  <select
    value={value}
    onChange={onChange}
    className="form-control"
    style={{ color: 'black', backgroundColor: 'transparent', borderColor: '#f9f9f9' }}
  >
    <option value="" disabled>Persons</option>
    {options.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ))}
  </select>
);

const ReservationForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [persons, setPersons] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseState, setResponseState] = useState(null);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    return name && phoneNumber && persons && startDate && startTime;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseState(null);
    setMessage('');
    setErrorMessage('');

    if (!validateForm()) {
      setLoading(false);
      setErrorMessage('Please fill out the form and try submitting.');
      return;
    }

    const formattedDate = startDate ? startDate.toISOString().split('T')[0] : '';
    const formattedTime = startTime ? startTime.toTimeString().split(' ')[0] : '';

    const reservation = {
      name,
      phoneNumber,
      startDate: formattedDate,
      startTime: formattedTime,
      persons: parseInt(persons),
    };

    try {
      // Save to Airtable (already implemented)
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservation),
      });

      // Save to Firebase Firestore
      await addDoc(collection(db, 'AllReservations'), reservation);

      if (response.ok) {
        setLoading(false);
        setResponseState('success');
        setMessage('Reservation successful!');

        // Clear the form after 3 seconds
        setTimeout(() => {
          setName('');
          setPhoneNumber('');
          setPersons('');
          setStartDate(null);
          setStartTime(null);
          setResponseState(null);
          setMessage('');
        }, 3000);
      } else {
        const errorResponse = await response.json();
        setLoading(false);
        setResponseState('error');
        setMessage(`Failed to make reservation: ${errorResponse.error.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      setResponseState('error');
      setMessage('Error making reservation.');
    }
  };

  return (
    <div className="form-wrap">
      <div className="tab">
        <div className="tab-content">
          <div className="tab-content-inner active" data-content="signup">
            <h3 className="cursive-font">Table Reservation</h3>
            <form onSubmit={handleSubmit}>
              <div className="row form-group">
                <div className="col-md-12">
                  <CustomInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <CustomInput
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <CustomSelect
                    value={persons}
                    onChange={(e) => setPersons(e.target.value)}
                    options={["1", "2", "3", "4", "5+"]}
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <label htmlFor="date-start">Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="MM/DD/YYYY"
                    className="form-control"
                    required
                    customInput={<CustomInput />}
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <label htmlFor="time">Time</label>
                  <DatePicker
                    selected={startTime}
                    onChange={(time) => setStartTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    minTime={new Date().setHours(11, 30)}
                    maxTime={new Date().setHours(23, 59)}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    placeholderText="Select Time"
                    className="form-control"
                    required
                    customInput={<CustomInput />}
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <button
                    type="submit"
                    className={`btn btn-primary btn-block ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : responseState === 'success' ? (
                      <FaCheck />
                    ) : responseState === 'error' ? (
                      <FaTimes />
                    ) : (
                      'Reserve Now'
                    )}
                  </button>
                  {errorMessage && (
                    <p className="text-danger mt-2">{errorMessage}</p>
                  )}
                </div>
              </div>
              {message && (
                <div className="row form-group">
                  <div className="col-md-12">
                    <p
                      className={`reservation-message ${
                        responseState === 'success' ? 'text-success' : 'text-danger'
                      }`}
                    >
                      {message}
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;