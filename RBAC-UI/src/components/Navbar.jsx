import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar = () => {

    const[option,setOption] = useState("Dashboard");

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
      RBAC Admin Dashboard
      </Link>
      <div className="nav-links">
        <Link to="/" onClick={()=>setOption("Dashboard")} className={option==="Dashboard"?"active":""}>Dashboard</Link>
        <Link to="/role-management" onClick={()=>setOption("Role Management")} className={option==="Role Management"?"active":""} >Role Management</Link>
        <Link to="/user-management" onClick={()=>setOption("User Management")} className={option==="User Management"?"active":""} >User Management</Link>
      </div>
    </nav>
  );
};

export default Navbar;
