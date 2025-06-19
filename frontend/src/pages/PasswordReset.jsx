import React from 'react';
import { User } from 'lucide-react';

export default function PasswordReset() {
  return (
    <div className="max-w-md mx-auto mt-20 mb-20 p-6 bg-white shadow-md rounded-md border">
      <h2 className="text-2xl font-bold text-center mb-2">Lost Password Reset</h2>
      <p className="text-gray-600 text-center mb-6">
        Forgotten your password? Enter your email address below to begin the reset process.
      </p>
      <form className="space-y-4 bg-gradient-to-r">
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email Address
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 ring-blue-300">
            <User className="text-gray-400 mr-2" />
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              className="w-full outline-none"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
