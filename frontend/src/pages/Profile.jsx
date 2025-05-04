import React, { useEffect, useState } from "react";

function Profile() {
  const [form, setForm] = useState({
    name: "",
    bio: "",
    location: "",
    skills: "",
  });

  const userId = localStorage.getItem("userId"); // Save userId on login

  useEffect(() => {
    fetch(`https://your-backend/api/profile/${userId}`)
      .then((res) => res.json())
      .then((data) => setForm({ ...data, skills: data.skills?.join(", ") }));
  }, [userId]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = { ...form, skills: form.skills.split(",").map(s => s.trim()) };
    await fetch(`https://your-backend/api/profile/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    alert("Profile updated!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full" />
        <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Bio" className="border p-2 w-full" />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border p-2 w-full" />
        <input name="skills" value={form.skills} onChange={handleChange} placeholder="Skills (comma separated)" className="border p-2 w-full" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}

export default Profile;
