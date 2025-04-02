import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/signup", {
        user: { email, password, password_confirmation: confirmPassword }
      });
      navigate("/");
      // Redirect to login or home page
    } catch (err) {
      setError(err.response.data.message || "An error occurred during signup");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up</h2>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <form onSubmit={handleSignUp} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
      </form>
      </div>
    </div>
  );
};

export default SignUpPage;
