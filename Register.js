import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('/api/auth/register', { name, email, password });
      alert('Registered!');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Register</h2>
      <input placeholder="Name" className="block mb-2" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" className="block mb-2" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" className="block mb-2" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister} className="bg-green-600 text-white px-4 py-2">Register</button>
    </div>
  );
};

export default Register;
