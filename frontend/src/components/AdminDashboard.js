import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [checkpoints, setCheckpoints] = useState([]);
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/checkpoints').then((response) => {
      setCheckpoints(response.data);
    });
  }, []);

  const addCheckpoint = () => {
    axios
      .post('http://localhost:3000/checkpoints', {
        name,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      })
      .then((response) => {
        setCheckpoints([...checkpoints, response.data]);
      });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <input
        type="text"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <button onClick={addCheckpoint}>Add Checkpoint</button>
      <ul>
        {checkpoints.map((checkpoint) => (
          <li key={checkpoint._id}>
            {checkpoint.name} - {checkpoint.latitude}, {checkpoint.longitude}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;