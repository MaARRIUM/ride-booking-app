import React from 'react';

function DriverAction({ ride, onDecision }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Driver Panel</h2>
      <p><strong>Ride Request:</strong></p>
      <p>Pickup: {ride.pickup}</p>
      <p>Drop-off: {ride.dropoff}</p>
      <p>Type: {ride.rideType}</p>

      <button onClick={() => onDecision('accepted')}>Accept</button>
      <button onClick={() => onDecision('rejected')} style={{ marginLeft: '10px' }}>Reject</button>
    </div>
  );
}

export default DriverAction;
