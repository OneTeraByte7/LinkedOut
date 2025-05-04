import React, { useState } from "react";
import axios from "axios";

const CareerGrowthPrediction = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [growthPrediction, setGrowthPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/growth-prediction", {
        currentRole,
        yearsOfExperience,
        skills
      });

      setGrowthPrediction(response.data);
    } catch (error) {
      console.error("Error fetching career growth prediction:", error);
    }
    setLoading(false);
  };

  return (
    <div className="career-growth-prediction">
      <h1 className="text-2xl font-bold mb-4">Career Growth Prediction</h1>

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
        <input
          type="text"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded" disabled={loading}>
          {loading ? "Loading..." : "Get Career Growth Prediction"}
        </button>
      </form>

      {growthPrediction && !loading && (
        <div className="mt-8">
          <h3 className="font-semibold">Career Growth Prediction:</h3>
          <p>{growthPrediction.predictedRole}</p>
          <p>Estimated Salary: {growthPrediction.predictedSalary}</p>
        </div>
      )}
    </div>
  );
};

export default CareerGrowthPrediction;
