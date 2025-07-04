import React, { useState, useEffect } from 'react';

function RideStatus({ ride, onComplete }) {
  const [statusIndex, setStatusIndex] = useState(0);
  const statuses = ['Requested', 'Accepted', 'In Progress', 'Completed'];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => {
        if (prev < statuses.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          onComplete();
          return prev;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ride Status</h2>
      <p><strong>Pickup:</strong> {ride.pickup}</p>
      <p><strong>Drop-off:</strong> {ride.dropoff}</p>
      <p><strong>Ride Type:</strong> {ride.rideType}</p>
      <p><strong>Status:</strong> {statuses[statusIndex]}</p>
    </div>
  );
}

export default RideStatus;
