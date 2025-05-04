import React, { useState } from "react";
import axios from "axios";

const SkillSuggestion = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [suggestedSkills, setSuggestedSkills] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating an API request to fetch skill suggestions based on role and experience
    try {
      const response = await axios.post("http://localhost:5000/api/skill-suggestions", {
        currentRole,
        yearsOfExperience
      });

      // Randomly select skills based on user input (this should be replaced with ML prediction)
      setSuggestedSkills(response.data);
    } catch (error) {
      console.error("Error fetching skill suggestions:", error);
    }
    setLoading(false);
  };

  return (
    <div className="skill-suggestion">
      <h1 className="text-2xl font-bold mb-4">Skill Suggestions</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Current Role"
          value={currentRole}
          onChange={(e) => setCurrentRole(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="number"
          placeholder="Years of Experience"
          value={yearsOfExperience}
          onChange={(e) => setYearsOfExperience(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded" disabled={loading}>
          {loading ? "Loading..." : "Get Skill Suggestions"}
        </button>
      </form>

      {suggestedSkills && !loading && (
        <div className="mt-8">
          <h3 className="font-semibold">Suggested Skills:</h3>
          <ul>
            {suggestedSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SkillSuggestion;
