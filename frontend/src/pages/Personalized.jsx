import React, { useState } from "react";
import axios from "axios";

const CourseRecommendation = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [skills, setSkills] = useState("");
  const [recommendedCourses, setRecommendedCourses] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/course-recommendation", {
        currentRole,
        skills
      });

      setRecommendedCourses(response.data);
    } catch (error) {
      console.error("Error fetching course recommendations:", error);
    }
    setLoading(false);
  };

  return (
    <div className="course-recommendation">
      <h1 className="text-2xl font-bold mb-4">Personalized Course Recommendations</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Current Role"
          value={currentRole}
          onChange={(e) => setCurrentRole(e.target.value)}
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
          {loading ? "Loading..." : "Get Course Recommendations"}
        </button>
      </form>

      {recommendedCourses && !loading && (
        <div className="mt-8">
          <h3 className="font-semibold">Recommended Courses:</h3>
          <ul>
            {recommendedCourses.map((course, index) => (
              <li key={index}>
                <a href={course.link} target="_blank" rel="noopener noreferrer">
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseRecommendation;
