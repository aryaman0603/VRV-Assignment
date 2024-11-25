import React, { useState } from "react";
import PermissionList from "./PermissionList";

const RoleForm = ({ onAddRole, roleToEdit, onEditRole }) => {
  const [roleName, setRoleName] = useState(roleToEdit ? roleToEdit.name : "");
  const [permissions, setPermissions] = useState(roleToEdit ? roleToEdit.permissions : []);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleCheckboxChange = (permission) => {
    setPermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter(p => p !== permission)
        : [...prevPermissions, permission]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    if (roleName.trim() === "") {
      setError("Role name cannot be empty.");
      return;
    }
    if (/^\s*$/.test(roleName)) {
      setError("Role name cannot contain only spaces.");
      return;
    }
    if (permissions.length === 0) {
      setError("At least one permission must be selected.");
      return;
    }
    const roleData = { name: roleName, permissions };
    if (roleToEdit) {
      onEditRole(roleToEdit.id, roleData);
      setSuccessMessage("Role updated successfully!");
    } else {
      onAddRole(roleData);
      setSuccessMessage("Role added successfully!");
    }
    setRoleName("");
    setPermissions([]);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Role Name:
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          placeholder="Enter role name"
          required
        />
      </label>
      <PermissionList permissions={permissions} onTogglePermission={handleCheckboxChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <button type="submit">{roleToEdit ? "Update Role" : "Add Role"}</button>
    </form>
  );
};

export default RoleForm;
