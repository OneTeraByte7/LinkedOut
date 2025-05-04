import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-8">Welcome to LinkedOut 💼</h1>
      <p className="text-lg mb-8">Stay connected with professionals and grow your network.</p>
      
      <div className="space-x-6">
        <Link to="/login">
          <button className="px-6 py-3 bg-blue-800 text-white rounded-full text-lg hover:bg-blue-900 transition ease-in-out duration-200">
            Sign In
          </button>
        </Link>
        
        <Link to="/register">
          <button className="px-6 py-3 bg-green-600 text-white rounded-full text-lg hover:bg-green-700 transition ease-in-out duration-200">
            Join Now
          </button>
        </Link>
      </div>

      <footer className="absolute bottom-4 text-sm text-gray-200">
        <p>By joining, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.</p>
      </footer>
    </div>
  );
}

export default Landing;
