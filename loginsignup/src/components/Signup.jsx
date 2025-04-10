import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login.jsx'; // Import Login component

function Signup() {
  const [showSignup, setShowSignup] = useState(true); // Local state to manage form rendering
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/save', { name, email, password, phone });
      setMessage(response.data || 'Signup successful');
      if (response.data === name) {
        alert('Signup successful!');
      }
    } catch (error) {
      setMessage('Signup failed: ' + (error.response?.data || error.message));
    }
  };

  const Content = showSignup ? (
    <form onSubmit={handleSignup} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your phone"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white p-2 rounded-md hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Signup
      </button>
      <p className="mt-2 text-center text-sm text-gray-600">
        Already a member?{' '}
        <a href="#" className="text-purple-500 hover:underline" onClick={() => setShowSignup(false)}>
          Login now
        </a>
      </p>
      {message && <p className="mt-2 text-center text-sm">{message}</p>}
    </form>
  ) : (
    <Login /> // Render Login component when switched
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Signup Form</h2>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowSignup(true)}
          className={`px-4 py-2 rounded-l-md ${
            showSignup ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' : 'bg-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
        >
          Login
        </button>
        <button
          onClick={() => setShowSignup(false)}
          className={`px-4 py-2 rounded-r-md ${
            !showSignup ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' : 'bg-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
        >
          Signup
        </button>
      </div>
      {Content}
    </div>
  );
}

export default Signup;