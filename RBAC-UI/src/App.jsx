import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/role-management" element={<RoleManagement />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
