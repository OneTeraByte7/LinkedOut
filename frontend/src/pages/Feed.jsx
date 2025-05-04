import React, { useEffect, useState } from "react";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://your-backend/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Live Feed</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post._id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p>{post.description}</p>
            <p className="text-sm text-gray-500 mt-2">Posted by: {post.postedBy?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
