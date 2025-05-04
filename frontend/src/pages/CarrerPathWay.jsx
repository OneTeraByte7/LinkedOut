import React, { useState } from "react";
import axios from "axios";

const CareerPathway = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [careerPath, setCareerPath] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate ML processing delay
    setTimeout(async () => {
      try {
        // Normally, this would call your backend
        await axios.post("http://localhost:5000/api/career-path", {
          currentRole,
          yearsOfExperience,
          skills
        });

        // Simulate a random ML suggestion for the career path
        const randomCareerPath = getRandomCareerPath();
        setCareerPath({
          recommendedPath: randomCareerPath.path,
          skillsToLearn: randomCareerPath.skills,
          salaryForecast: randomCareerPath.salary
        });
      } catch (error) {
        console.error("Error fetching career path:", error);
      }
      setLoading(false);
    }, 2000); // Simulating loading time
  };

  // Simulated random career path generator (replace with actual ML logic)
  const getRandomCareerPath = () => {
    const paths = [
      {
        path: "Senior Software Engineer",
        skills: ["Advanced JavaScript", "React", "Node.js", "Database Management"],
        salary: "$120,000 - $150,000 per year"
      },
      {
        path: "Product Manager",
        skills: ["Product Strategy", "UX Design", "Agile Methodologies", "Market Research"],
        salary: "$100,000 - $130,000 per year"
      },
      {
        path: "Data Scientist",
        skills: ["Machine Learning", "Data Analysis", "Python", "SQL"],
        salary: "$110,000 - $140,000 per year"
      },
      {
        path: "UX Designer",
        skills: ["Wireframing", "Prototyping", "Adobe XD", "User Research"],
        salary: "$90,000 - $120,000 per year"
      }
    ];

    return paths[Math.floor(Math.random() * paths.length)];
  };

  return (
    <div className="career-pathway">
      <h1 className="text-2xl font-bold mb-4">Find Your Career Path</h1>

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
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Career Path"}
        </button>
      </form>

      {careerPath && !loading && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Recommended Career Path:</h2>
          <p>{careerPath.recommendedPath}</p>

          <h3 className="mt-4 font-semibold">Skills to Learn:</h3>
          <ul>
            {careerPath.skillsToLearn.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h3 className="mt-4 font-semibold">Salary Forecast:</h3>
          <p>{careerPath.salaryForecast}</p>
        </div>
      )}
    </div>
  );
};

export default CareerPathway;
