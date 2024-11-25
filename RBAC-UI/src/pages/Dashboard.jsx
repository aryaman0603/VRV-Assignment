// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import '../styles/Dashboard.css'

// const Dashboard = () => {
//   const [roles, setRoles] = useState([
//     { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"], status: "Active" },
//     { id: 2, name: "Viewer", permissions: ["Read"], status: "Inactive" },
//   ]);

//   const [users, setUsers] = useState([
//     { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Viewer", status: "Inactive" },
//   ]);

//   const activeRolesCount = roles.filter((role) => role.status === "Active").length;
//   const activeUsersCount = users.filter((user) => user.status === "Active").length;

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-box">
//         <h2>Dashboard</h2>
//         <div className="overview">
//           <div className="overview-item">
//             <h3>Active Roles</h3>
//             <p>{activeRolesCount} active roles</p>
//           </div>
//           <div className="overview-item">
//             <h3>Active Users</h3>
//             <p>{activeUsersCount} active users</p>
//           </div>
//         </div>

//         <div className="actions-box">
//           <h3>Actions</h3>
//           <ul>
//             <li>
//               <Link to="/role-management">Manage Roles</Link>
//             </li>
//             <li>
//               <Link to="/user-management">Manage Users</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext"
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { roles, users } = useContext(AppContext);

  const activeRolesCount = roles.filter((role) => role.status === "Active").length;
  const activeUsersCount = users.filter((user) => user.status === "Active").length;

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>Dashboard</h2>
        <div className="overview">
          <div className="overview-item">
            <h3>Active Roles</h3>
            <p>{activeRolesCount} active roles</p>
          </div>
          <div className="overview-item">
            <h3>Active Users</h3>
            <p>{activeUsersCount} active users</p>
          </div>
        </div>

        <div className="actions-box">
          <h3>Actions</h3>
          <ul>
            <li>
              <Link to="/role-management">Manage Roles</Link>
            </li>
            <li>
              <Link to="/user-management">Manage Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
