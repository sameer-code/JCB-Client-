import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Logged in!');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Login</h2>
      <input placeholder="Email" className="block mb-2" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" className="block mb-2" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2">Login</button>
    </div>
  );
};

export default Login;
