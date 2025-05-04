import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your actual API logic
    console.log("Logging in with", formData);
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f2ef]">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Sign in</h1>
        <p className="text-sm text-gray-600 mb-6">Stay updated on your professional world</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email or Phone"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-full hover:bg-blue-800"
          >
            Sign in
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          New to LinkedIn?{" "}
          <span
            className="text-blue-700 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Join now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
