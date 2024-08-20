import React, { useState, useEffect } from 'react';
import './ReservationData.css'; // Assuming you have a CSS file for styling

const ReservationData = () => {
  const [reservations, setReservations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingReservation, setEditingReservation] = useState(null);
  const [editedData, setEditedData] = useState({
    Name: '',
    "Phone Number": '',
    "Start Date": '',
    "Start Time": '',
    Persons: '',
  });

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    const response = await fetch('https://api.airtable.com/v0/appcRUV4NMy7IsDFI/tblqkjaFo2onOs9Tm?view=Grid%20view', {
      headers: {
        Authorization: `Bearer patCivRJrJBScuORc.8bd709c0d76ff06234939d1fad4f2008148d0846fdb72523613b5394381dd21e`,
      },
    });
    const data = await response.json();
    if (data.records) {
      setReservations(data.records.map(record => ({
        id: record.id,
        Name: record.fields.Name,
        "Phone Number": record.fields["Phone Number"],
        "Start Date": record.fields["Start Date"],
        "Start Time": record.fields["Start Time"],
        Persons: record.fields.Persons,
      })));
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEdit = (reservation) => {
    setEditingReservation(reservation.id);
    setEditedData({
      Name: reservation.Name,
      "Phone Number": reservation["Phone Number"],
      "Start Date": reservation["Start Date"],
      "Start Time": reservation["Start Time"],
      Persons: reservation.Persons,
    });
  };

  const handleDelete = async (id) => {
    await fetch(`https://api.airtable.com/v0/appcRUV4NMy7IsDFI/tblqkjaFo2onOs9Tm/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer patCivRJrJBScuORc.8bd709c0d76ff06234939d1fad4f2008148d0846fdb72523613b5394381dd21e`,
      },
    });
    fetchReservations();
  };

  const handleSave = async () => {
    const updatedData = {
      Name: editedData.Name,
      "Phone Number": editedData["Phone Number"],
      "Start Date": editedData["Start Date"],
      "Start Time": editedData["Start Time"],
      Persons: parseInt(editedData.Persons, 10), // Ensure Persons is an integer
    };

    await fetch(`https://api.airtable.com/v0/appcRUV4NMy7IsDFI/tblqkjaFo2onOs9Tm/${editingReservation}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer patCivRJrJBScuORc.8bd709c0d76ff06234939d1fad4f2008148d0846fdb72523613b5394381dd21e`,
      },
      body: JSON.stringify({ fields: updatedData }),
    });

    setEditingReservation(null);
    fetchReservations();
  };

  const filteredReservations = reservations.filter((reservation) =>
    reservation.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation["Phone Number"].toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation["Start Date"].includes(searchTerm) ||
    reservation["Start Time"].includes(searchTerm) ||
    reservation.Persons.toString().includes(searchTerm)
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
      <div className="active-reservations">
        <strong>Active Reservations: {reservations.length}</strong>
      </div>
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
                        value={editedData.Name}
                        onChange={(e) => setEditedData({ ...editedData, Name: e.target.value })}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={editedData["Phone Number"]}
                        onChange={(e) => setEditedData({ ...editedData, "Phone Number": e.target.value })}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        value={editedData["Start Date"]}
                        onChange={(e) => setEditedData({ ...editedData, "Start Date": e.target.value })}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        className="form-control"
                        value={editedData["Start Time"]}
                        onChange={(e) => setEditedData({ ...editedData, "Start Time": e.target.value })}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={editedData.Persons}
                        onChange={(e) => setEditedData({ ...editedData, Persons: e.target.value })}
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
                    <td>{reservation.Name}</td>
                    <td>{reservation["Phone Number"]}</td>
                    <td>{reservation["Start Date"]}</td>
                    <td>{reservation["Start Time"]}</td>
                    <td>{reservation.Persons}</td>
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