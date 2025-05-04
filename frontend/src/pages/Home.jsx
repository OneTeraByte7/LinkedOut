import React from "react";

const Home = () => {
  return (
    <div className="bg-[#f3f2ef] min-h-screen">
      {/* Top Navbar */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600">LinkedIn</h1>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-md border border-gray-300 w-1/3"
          />
          <div className="flex gap-4">
            <span className="text-sm text-gray-600">Home</span>
            <span className="text-sm text-gray-600">My Network</span>
            <span className="text-sm text-gray-600">Jobs</span>
            <span className="text-sm text-gray-600">Messaging</span>
            <span className="text-sm text-gray-600">Notifications</span>
          </div>
        </div>
      </header>

      <div className="flex gap-4 pt-20 max-w-7xl mx-auto px-4">
        {/* Left Sidebar */}
        <aside className="w-1/4 bg-white p-4 rounded-md shadow-sm h-fit">
          <div className="text-center">
            <img
              src="https://placehold.co/100x100"
              alt="Profile"
              className="rounded-full mx-auto mb-2"
            />
            <h2 className="font-semibold text-lg">John Doe</h2>
            <p className="text-sm text-gray-600">Software Developer</p>
          </div>
          <hr className="my-4" />
          <div className="text-sm text-gray-700 space-y-2">
            <p>Connections</p>
            <p>Grow your network</p>
            <p>Saved Items</p>
          </div>
        </aside>

        {/* Feed */}
        <main className="flex-1">
          {/* Post Input */}
          <div className="bg-white p-4 mb-4 rounded-md shadow-sm">
            <input
              type="text"
              placeholder="Start a post"
              className="w-full border border-gray-300 px-4 py-2 rounded-full"
            />
          </div>

          {/* Posts */}
          {[1, 2, 3].map((post) => (
            <div
              key={post}
              className="bg-white p-4 mb-4 rounded-md shadow-sm"
            >
              <h3 className="font-semibold">Jane Smith</h3>
              <p className="text-sm text-gray-600">Product Manager at ABC Inc.</p>
              <p className="mt-2 text-gray-800">
                This is a sample LinkedIn-style post. You can like, comment, or share this post.
              </p>
              <div className="flex justify-around mt-4 text-sm text-gray-600">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
              </div>
            </div>
          ))}
        </main>

        {/* Right Sidebar */}
        <aside className="w-1/4 hidden lg:block">
          <div className="bg-white p-4 rounded-md shadow-sm mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">LinkedIn News</h3>
            <ul className="text-sm text-gray-700 space-y-2">
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
