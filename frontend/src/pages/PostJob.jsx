import React, { useState } from "react";

function PostJob() {
  const [form, setForm] = useState({ title: "", description: "" });
  const userId = localStorage.getItem("userId");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://your-backend/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, postedBy: userId }),
    });
    alert("Job posted!");
    setForm({ title: "", description: "" });
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl mb-4">Post a Job/Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Job Title" className="w-full border p-2" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full border p-2" />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Post</button>
      </form>
    </div>
  );
}

export default PostJob;
