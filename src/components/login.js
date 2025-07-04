import React, { useState } from 'react';

function Login({ onLogin }) {
  const [name, setName] = useState('');

  const handleLogin = () => {
    if (name.trim() !== '') {
      onLogin({ id: 1, name, type: 'passenger' });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
