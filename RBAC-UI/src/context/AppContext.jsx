import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"], status: "Active" },
    { id: 2, name: "Viewer", permissions: ["Read"], status: "Inactive" },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Viewer", status: "Inactive" },
  ]);

  return (
    <AppContext.Provider value={{ roles, setRoles, users, setUsers }}>
      {children}
    </AppContext.Provider>
  );
};
