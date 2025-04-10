import React, { useState } from 'react';
import axios from 'axios';
import Signup from './Signup.jsx'; // Import Signup component

function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', { email, password });
      setMessage(response.data.message || 'Login successful');
      if (response.data.status) {
        alert('Login successful!');
      }
    } catch (error) {
      setMessage('Login failed: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleSignupForm = () => {
    // Placeholder for Signup form logic (handled in Signup.jsx)
  };

  const Content = showLogin ? (
    <form onSubmit={handleLogin} className="space-y-4">
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
      <a href="#" className="block text-sm text-gray-600 hover:text-purple-500 mb-4">
        Forgot password?
      </a>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white p-2 rounded-md hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Login
      </button>
      <p className="mt-2 text-center text-sm text-gray-600">
        Not a member?{' '}
        <a href="#" className="text-purple-500 hover:underline" onClick={() => setShowLogin(false)}>
          Signup now
        </a>
      </p>
      {message && <p className="mt-2 text-center text-sm">{message}</p>}
    </form>
  ) : (
    <Signup /> // Render Signup component when switched
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login Form</h2>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowLogin(true)}
          className={`px-4 py-2 rounded-l-md ${
            showLogin ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' : 'bg-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
        >
          Login
        </button>
        <button
          onClick={() => setShowLogin(false)}
          className={`px-4 py-2 rounded-r-md ${
            !showLogin ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' : 'bg-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
        >
          Signup
        </button>
      </div>
      {Content}
    </div>
  );
}

export default Login;