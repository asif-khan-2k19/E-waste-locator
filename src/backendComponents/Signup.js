import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg md:w-96 w-full">
        <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-600 text-center">
            Already have an account? <Link to="/login" className="text-green-500">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
