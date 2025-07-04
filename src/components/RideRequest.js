import React, { useState } from 'react';

function RideRequest({ onRequestRide }) {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [rideType, setRideType] = useState('Car');

  const handleSubmit = () => {
    if (pickup && dropoff) {
      const newRide = {
        id: Date.now(),
        pickup,
        dropoff,
        rideType,
        status: 'Requested',
      };
      onRequestRide(newRide);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Request a Ride</h2>

      <input
        type="text"
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      /><br /><br />

      <input
        type="text"
        placeholder="Drop-off Location"
        value={dropoff}
        onChange={(e) => setDropoff(e.target.value)}
      /><br /><br />

      <label>Select Ride Type: </label>
      <select value={rideType} onChange={(e) => setRideType(e.target.value)}>
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
        <option value="Rickshaw">Rickshaw</option>
      </select><br /><br />

      <button onClick={handleSubmit}>Request Ride</button>
    </div>
  );
}

export default RideRequest;
