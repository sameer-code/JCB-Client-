// src/pages/Login.js
import React from "react";

const Login = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white mt-6 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Login</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Login</button>
      </form>
    </div>
  );
};

export default Login;
