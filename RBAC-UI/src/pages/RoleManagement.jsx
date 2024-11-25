import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext"; // Import the context
import RoleForm from "../components/RoleForm";
import '../styles/RoleManagement.css';

const RoleManagement = () => {
    const { roles, setRoles } = useContext(AppContext); // Use context to access and modify roles state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roleToEdit, setRoleToEdit] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const handleAddRole = (role) => {
        setRoles([...roles, { id: Date.now(), ...role }]);
        setSuccessMessage("Role added successfully!");
    };

    const handleEditRole = (id, updatedRole) => {
        setRoles(roles.map(role => (role.id === id ? { ...role, ...updatedRole } : role)));
        setSuccessMessage("Role updated successfully!");
        closeModal();
    };

    const handleDeleteRole = (id) => {
        setRoles(roles.filter(role => role.id !== id));
        setSuccessMessage("Role deleted successfully!");
    };

    const openModal = (role) => {
        setRoleToEdit(role);
        setIsModalOpen(true);
        setSuccessMessage("");
    };

    const closeModal = () => {
        setRoleToEdit(null);
        setIsModalOpen(false);
    };

    const handleSort = () => {
        const sortedRoles = [...roles].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
        setRoles(sortedRoles);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredRoles = roles.filter(role =>
            role.name.toLowerCase().includes(searchQuery)
        );
        setRoles(filteredRoles);
    };

    return (
        <div>
            <h2>Role Management</h2>
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

            <div className="controls-wrapper">
                <input
                    type="text"
                    placeholder="Search roles..."
                    onChange={handleSearch}
                />
                <button onClick={() => openModal(null)}>Add Role</button>
                <button onClick={handleSort}>
                    Sort Roles ({sortOrder === "asc" ? "Ascending" : "Descending"})
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Role Name</th>
                        <th>Permissions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map(role => (
                        <tr key={role.id}>
                            <td>{role.name}</td>
                            <td>{role.permissions.join(", ")}</td>
                            <td>
                                <button onClick={() => openModal(role)}>Edit</button>
                                <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <RoleForm
                            roleToEdit={roleToEdit}
                            onAddRole={handleAddRole}
                            onEditRole={handleEditRole}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoleManagement;
