import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Cookies from 'js-cookie';

const CustomInput = React.forwardRef(({ value, onClick, onChange, placeholder }, ref) => (
  <input
    value={value}
    onClick={onClick}
    onChange={onChange}
    ref={ref}
    placeholder={placeholder}
    className="form-control"
    style={{ color: 'black', backgroundColor: 'transparent', borderColor: '#f9f9f9' }} // Transparent background
  />
));

const CustomSelect = ({ value, onChange, options }) => (
  <select
    value={value}
    onChange={onChange}
    className="form-control"
    style={{ color: 'black', backgroundColor: 'transparent', borderColor: '#f9f9f9' }} // Transparent background
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = startDate.toISOString().split('T')[0];
    const formattedTime = startTime.toTimeString().split(' ')[0];

    const reservation = {
      name,
      phoneNumber,
      startDate: formattedDate,
      startTime: formattedTime,
      persons,
    };

    try {
      const response = await fetch('http://localhost:3001/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include credentials (cookies) in requests
        body: JSON.stringify(reservation),
      });

      if (response.ok) {
        alert('Reservation successful!');
        // Clear the form
        setName('');
        setPhoneNumber('');
        setPersons('');
        setStartDate(null);
        setStartTime(null);
        // Optionally set a cookie
        Cookies.set('lastReservation', JSON.stringify(reservation), { expires: 7 });
      } else {
        alert('Failed to make reservation.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error making reservation.');
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
                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Reserve Now"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;