import React, { useState } from 'react';
import axios from 'axios';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const response = await axios.post('http://localhost:8080/api/login', { email, password });
        setMessage(response.data.message || 'Login successful');
        if (response.data.status) {
          alert('Login successful!');
        }
      } catch (error) {
        setMessage('Login failed: ' + (error.response?.data?.message || error.message));
      }
    } else {
      try {
        const response = await axios.post('http://localhost:8080/api/save', { name, email, password, phone });
        setMessage(response.data || 'Signup successful');
        if (response.data === 'signup success') {
          alert('Signup successful!');
          setIsLogin(true);
          setName('');
          setEmail('');
          setPassword('');
          setPhone('');
        }
      } catch (error) {
        setMessage('Signup failed: ' + (error.response?.data || error.message));
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        {isLogin ? 'Login' : 'Signup'}
      </h2>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => {
            setIsLogin(true);
            setEmail('');
            setPassword('');
          }}
          className={`px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            isLogin
              ? 'bg-gradient-to-b from-[#660066] to-[#4d004d] text-white'
              : 'bg-[#4d004d] text-gray-400 hover:bg-[#2F1B4A]'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => {
            setIsLogin(false);
            setName('');
            setEmail('');
            setPassword('');
            setPhone('');
          }}
          className={`px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            !isLogin
              ? 'bg-gradient-to-b from-[#660066] to-[#4d004d] text-white'
              : 'bg-[#4d004d] text-gray-400 hover:bg-[#2F1B4A]'
          }`}
        >
          Signup
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
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
        )}
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
        {!isLogin && (
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
        )}
        <a href="#" className="block text-sm text-gray-600 hover:text-purple-500 mb-4" onClick={(e) => e.preventDefault()}>
          Forgot password?
        </a>
        <button
          type="submit"
          className="w-full bg-gradient-to-b from-[#660066] to-[#4d004d] text-white p-2 rounded-md hover:from-[#B266FF] hover:to-[#2F1B4A] focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {isLogin ? 'Login' : 'Signup'}
        </button>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLogin ? 'Not a member?' : 'Already a member?'}{' '}
          <a
            href="#"
            className="text-purple-900 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              setIsLogin(!isLogin);
              setEmail('');
              setPassword('');
              if (!isLogin) {
                setName('');
                setPhone('');
              }
            }}
          >
            {isLogin ? 'Signup now' : 'Login now'}
          </a>
        </p>
        {message && <p className="mt-2 text-center text-sm">{message}</p>}
      </form>
    </div>
  );
}

export default AuthForm;