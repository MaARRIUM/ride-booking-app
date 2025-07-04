import React, { useState } from 'react';
import Login from './components/login';
import RideRequest from './components/RideRequest';
import RideStatus from './components/RideStatus';
import DriverAction from './components/DriverAction'; // ✅ NEW

function App() {
  const [user, setUser] = useState(null);
  const [ride, setRide] = useState(null);
  const [history, setHistory] = useState([]);
  const [driverDecision, setDriverDecision] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleRideRequest = (rideData) => {
    setRide(rideData);
    setDriverDecision(null); // Reset previous decision
  };

  const handleDriverDecision = (decision) => {
    if (decision === 'accepted') {
      setDriverDecision('accepted');
    } else {
      // Add to history as Rejected
      setHistory([...history, { ...ride, status: 'Rejected' }]);
      setRide(null);
    }
  };

  const handleRideComplete = () => {
    setHistory([...history, { ...ride, status: 'Completed' }]);
    setRide(null);
    setDriverDecision(null);
  };

  return (
    <div className="App">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : !ride ? (
        <>
          <RideRequest onRequestRide={handleRideRequest} />
          <div style={{ padding: '20px' }}>
            <h3>Ride History</h3>
            {history.length === 0 ? (
              <p>No past rides yet.</p>
            ) : (
              <ul>
                {history.map((r, i) => (
                  <li key={i}>
                    {r.pickup} to {r.dropoff} ({r.rideType}) - {r.status}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : driverDecision === 'accepted' ? (
        <RideStatus ride={ride} onComplete={handleRideComplete} />
      ) : (
        <DriverAction ride={ride} onDecision={handleDriverDecision} />
      )}
    </div>
  );
}

export default App;
