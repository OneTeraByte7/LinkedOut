import React from 'react';
import { useNavigate } from 'react-router-dom';

const MLFeatures = () => {
  const navigate = useNavigate();

  // Navigate to the respective ML feature page
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="ml-features-container max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore ML Features</h1>
      
      <div className="buttons-container flex flex-col gap-6 items-center">
        {/* Button for Career Pathway ML */}
        <button
          onClick={() => handleNavigate('/career-pathway')}
          className="bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 w-1/2 text-center"
        >
          Career Pathway ML
        </button>

        {/* Button for Path ML */}
        <button
          onClick={() => handleNavigate('/carrer-ml')}
          className="bg-green-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 w-1/2 text-center"
        >
          Path ML
        </button>

        {/* Button for Skill ML */}
        <button
          onClick={() => handleNavigate('/skill-ml')}
          className="bg-yellow-600 text-white p-4 rounded-lg shadow-md hover:bg-yellow-700 transition-all duration-300 w-1/2 text-center"
        >
          Skill ML
        </button>

        {/* Button for Personalized Recommendations */}
        <button
          onClick={() => handleNavigate('/personalized')}
          className="bg-purple-600 text-white p-4 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 w-1/2 text-center"
        >
          Personalized Recommendations
        </button>
      </div>
    </div>
  );
};

export default MLFeatures;
