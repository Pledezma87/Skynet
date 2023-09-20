import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Body.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";

function AppRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    );
  }
export default AppRoutes;
