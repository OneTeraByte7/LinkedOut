import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PostJob from "./pages/PostJob";
import Feed from "./pages/Feed";
import CareerPathway from "./pages/CarrerPathWay";
import MLFeatures from './pages/MLFeatures';
import Skill from './pages/Skill'; // Create these pages as required
import CarrerMI from './pages/CarrerMl';
import Personalized from './pages/Personalized';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/ml-features" element={<MLFeatures />} />
        <Route path="/career-pathway" element={<CareerPathway />} />
        <Route path="/carrer-ml" element={<CarrerMI />} />
        <Route path="/skill-ml" element={<Skill/>} />
        <Route path="/personalized" element={<Personalized />} />
      </Routes>
    </Router>
  );
}

export default App;
