import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate= useNavigate();
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login Sccessfull!")
    console.log(formData)
    navigate("/")
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-2/3 p-6 space-y-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
            
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
            
            <button type="submit" className="w-full bg-indigo-500 text-white p-2 mt-2 rounded-md hover:bg-indigo-600">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
