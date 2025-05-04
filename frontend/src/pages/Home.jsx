import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [postText, setPostText] = useState("");
  const [jobPostText, setJobPostText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handlePostChange = (e) => {
    setPostText(e.target.value);
  };

  const handleJobPostChange = (e) => {
    setJobPostText(e.target.value);
  };

  const handlePostSubmit = () => {
    console.log("Post submitted: ", postText);
    setPostText("");
  };

  const handleJobPostSubmit = () => {
    console.log("Job post submitted: ", jobPostText);
    setJobPostText("");
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? "bg-gray-900 text-white min-h-screen" : "bg-[#f3f2ef] text-black min-h-screen"}>
      
      {/* Top Navbar */}
      <header className={`bg-white shadow-sm fixed w-full top-0 z-10 ${isDarkTheme ? "bg-gray-800 text-white" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600">LinkedIn</h1>

          <input
            type="text"
            placeholder="Search"
            className={`px-4 py-2 rounded-md border w-1/3 ${isDarkTheme ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"}`}
          />

          <div className="flex gap-4 items-center">
            <span className="text-sm">Home</span>
            <span className="text-sm">My Network</span>
            <span className="text-sm">Jobs</span>
            <span className="text-sm">Messaging</span>
            <span className="text-sm">Notifications</span>

            {/* ML Features Button */}
            <Link
              to="/ml-features"
              className={`text-"sm px-3 py-1 rounded-md ${isDarkTheme ? "bg-gray-700 text-white" : "bg-blue-500 text-white hover:bg-blue-600"}`}
            >
              ML Features
            </Link>

            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-md ${isDarkTheme ? "bg-gray-700 text-white" : "bg-blue-600 text-white"}`}
            >
              {isDarkTheme ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </header>

      <div className="flex gap-4 pt-20 max-w-7xl mx-auto px-4">
        {/* Left Sidebar */}
        <aside className={`w-1/4 p-4 rounded-md shadow-sm h-fit ${isDarkTheme ? "bg-gray-800 text-white" : "bg-white"}`}>
          <div className="text-center">
            <h2 className="font-semibold text-lg">Soham Suryawanshi</h2>
            <p className="text-sm">Full Stack Developer</p>
          </div>
          <hr className="my-4" />
          <div className="text-sm space-y-2">
            <p>Connections</p>
            <p>Grow your network</p>
            <p>Saved Items</p>
          </div>
        </aside>

        {/* Feed */}
        <main className="flex-1">
          {/* Post Input */}
          <div className={`p-4 mb-4 rounded-md shadow-sm ${isDarkTheme ? "bg-gray-800 text-white" : "bg-white"}`}>
            <input
              type="text"
              placeholder="Start a post"
              className={`w-full border px-4 py-2 rounded-full ${isDarkTheme ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"}`}
              value={postText}
              onChange={handlePostChange}
            />
            <button
              onClick={handlePostSubmit}
              className={`mt-2 px-6 py-2 rounded-full transition ${isDarkTheme ? "bg-blue-700 text-white" : "bg-blue-600 text-white hover:bg-blue-700"}`}
            >
              Post
            </button>
          </div>

          {/* Job Post Input */}
          <div className={`p-4 mb-4 rounded-md shadow-sm ${isDarkTheme ? "bg-gray-800 text-white" : "bg-white"}`}>
            <input
              type="text"
              placeholder="Post a job"
              className={`w-full border px-4 py-2 rounded-full ${isDarkTheme ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"}`}
              value={jobPostText}
              onChange={handleJobPostChange}
            />
            <button
              onClick={handleJobPostSubmit}
              className={`mt-2 px-6 py-2 rounded-full transition ${isDarkTheme ? "bg-green-700 text-white" : "bg-green-600 text-white hover:bg-green-700"}`}
            >
              Post Job
            </button>
          </div>

          {/* Sample Posts */}
          {[1, 2, 3].map((post) => (
            <div key={post} className={`p-4 mb-4 rounded-md shadow-sm ${isDarkTheme ? "bg-gray-800 text-white" : "bg-white"}`}>
              <div className="flex items-center gap-2">
                <img
                  src="https://placehold.co/50x50"
                  alt="Profile"
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Jane Smith</h3>
                  <p className="text-sm">Product Manager at ABC Inc.</p>
                </div>
              </div>
              <p className="mt-2">
                Vibe Coding Hackathon is best.
              </p>
              <div className="flex justify-around mt-4 text-sm">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
              </div>
            </div>
          ))}
        </main>

        {/* Right Sidebar */}
        <aside className={`w-1/4 hidden lg:block ${isDarkTheme ? "bg-gray-800 text-white" : "bg-white"}`}>
          <div className="p-4 rounded-md shadow-sm mb-4">
            <h3 className="font-semibold mb-2">LinkedIn News</h3>
            <ul className="text-sm space-y-2">
              <li>🚀 Hiring trends in 2025</li>
              <li>📈 Market up today</li>
              <li>🧠 AI and the future of jobs</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
