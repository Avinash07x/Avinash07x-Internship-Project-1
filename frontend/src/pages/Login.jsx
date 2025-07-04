import React, { useState } from 'react';
import { User, KeyRound, Eye, EyeOff } from 'lucide-react';
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-gradient-to-r p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-2">Login</h2>

        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email Address</label>
            <div className="flex items-center border border-gray-300 rounded">
              <span className="px-3 text-gray-600">
                <User />
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Password</label>
            <div className="flex items-center border border-gray-300 rounded">
              <span className="px-3 text-gray-600">
                <KeyRound />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full px-3 py-2 focus:outline-none"
              />
              <span
                className="px-3 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
            <div className="text-right mt-1 text-sm">
              <Link to="/passwordreset" className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          Not registered?{' '}
          <Link to="/createaccount" className="font-semibold text-blue-600">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
