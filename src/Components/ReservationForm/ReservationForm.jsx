import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Import icons from react-icons
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
  const [responseState, setResponseState] = useState(null); // null, 'success', 'error'
  const [message, setMessage] = useState(''); // Message to display after submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseState(null);
    setMessage('');

    const formattedDate = startDate ? startDate.toISOString().split('T')[0] : '';
    const formattedTime = startTime ? startTime.toTimeString().split(' ')[0] : '';

    const reservation = {
      name,
      phoneNumber,
      startDate: formattedDate,
      startTime: formattedTime,
      persons: parseInt(persons), // Ensure Persons is sent as a number
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
        setResponseState('success');
        setMessage('Reservation successful!');

        // Clear the form after 1 second
        setTimeout(() => {
          setName('');
          setPhoneNumber('');
          setPersons('');
          setStartDate(null);
          setStartTime(null);
          setResponseState(null);
          setMessage(''); // Clear message after form reset
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