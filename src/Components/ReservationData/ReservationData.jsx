import React, { useState, useEffect } from 'react';
import './ReservationData.css'; // Assuming you have a CSS file for styling

const ReservationData = () => {
  const [reservations, setReservations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingReservation, setEditingReservation] = useState(null);
  const [editedData, setEditedData] = useState({
    name: '',
    phoneNumber: '',
    startDate: '',
    startTime: '',
    persons: '',
  });

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    const response = await fetch('http://localhost:3001/api/reservations');
    const data = await response.json();
    if (data.success) {
      setReservations(data.reservations);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEdit = (reservation) => {
    setEditingReservation(reservation.id);
    setEditedData({
      name: reservation.name,
      phoneNumber: reservation.phone_number,
      startDate: reservation.date,
      startTime: reservation.time,
      persons: reservation.persons,
    });
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/api/reservations/${id}`, {
      method: 'DELETE',
    });
    fetchReservations();
  };

  const handleSave = async () => {
    await fetch(`http://localhost:3001/api/reservations/${editingReservation}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedData),
    });
    setEditingReservation(null);
    fetchReservations();
  };

  const filteredReservations = reservations.filter((reservation) =>
    reservation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.phone_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.date.includes(searchTerm) ||
    reservation.time.includes(searchTerm) ||
    reservation.persons.toString().includes(searchTerm)
  );

  return (
    <div className="container">
      <input
        type="text"
        className="form-control mb-4 reservation-search" 
        placeholder="Search reservations..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div style={{ overflowX: 'auto', marginTop: "5%", marginBottom: '10%' }}>
        <table className="table table-bordered table-responsive">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Persons</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservations.map((reservation) => (
              <tr key={reservation.id}>
                {editingReservation === reservation.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={editedData.name}
                        onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={editedData.phoneNumber}
                        onChange={(e) => setEditedData({ ...editedData, phoneNumber: e.target.value })}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        value={editedData.startDate}
                        onChange={(e) => setEditedData({ ...editedData, startDate: e.target.value })}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        className="form-control"
                        value={editedData.startTime}
                        onChange={(e) => setEditedData({ ...editedData, startTime: e.target.value })}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={editedData.persons}
                        onChange={(e) => setEditedData({ ...editedData, persons: e.target.value })}
                      />
                    </td>
                    <td>
                      <button className="btn btn-success mr-2" onClick={handleSave}>
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => setEditingReservation(null)}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{reservation.name}</td>
                    <td>{reservation.phone_number}</td>
                    <td>{reservation.date}</td>
                    <td>{reservation.time}</td>
                    <td>{reservation.persons}</td>
                    <td>
                      <button className="btn btn-warning mr-2" onClick={() => handleEdit(reservation)}>
                        Edit
                      </button>
                      <button className="btn btn-danger" onClick={() => handleDelete(reservation.id)}>
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationData;