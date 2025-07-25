// src/pages/Register.js
import React from "react";

const Register = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white mt-6 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Create Account</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Register</button>
      </form>
    </div>
  );
};

export default Register;
