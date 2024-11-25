import React, { useState, useContext } from "react";
import UserTable from "../components/UserTable";
import { AppContext } from "../context/AppContext"; // Import context
import "../styles/UserManagement.css";

const UserManagement = () => {
    const { users, setUsers } = useContext(AppContext); // Use context to access and modify the users state
    const [newUser, setNewUser] = useState({ name: "", email: "", role: "", status: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [isEditing, setIsEditing] = useState(false); // Track edit mode
    const [userToEdit, setUserToEdit] = useState(null); // Store the user being edited

    // Handle Add or Update User
    const handleAddOrUpdateUser = (user) => {
        if (!user.name || !user.email || !user.role || !user.status) {
            setErrorMessage("All fields are required!");
            return;
        }

        if (isEditing) {
            // Update existing user
            setUsers(users.map((u) => (u.id === userToEdit.id ? { ...u, ...user } : u)));
            setIsEditing(false); // Exit edit mode
            setUserToEdit(null); // Clear user being edited
        } else {
            // Add new user
            setUsers([...users, { id: Date.now(), ...user }]);
        }

        setNewUser({ name: "", email: "", role: "", status: "" }); // Reset the form
        setErrorMessage(""); // Clear error message
    };

    // Handle Edit Button Click
    const handleEditUser = (user) => {
        setIsEditing(true); // Enter edit mode
        setUserToEdit(user); // Set user to edit
        setNewUser(user); // Populate form with existing user data
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleAddOrUpdateUser(newUser);
    };

    return (
        <div>
            <h2>User Management</h2>

            {/* Error Message */}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            {/* Add or Edit User Form */}
            <form onSubmit={handleFormSubmit} style={{ marginBottom: "20px" }}>
                <div className="controls-wrapper">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newUser.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="role"
                        placeholder="Role"
                        value={newUser.role}
                        onChange={handleInputChange}
                    />
                    <select
                        name="status"
                        value={newUser.status}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                    <button type="submit">{isEditing ? "Update User" : "Add User"}</button>
                </div>
            </form>

            {/* User Table */}
            <UserTable
                users={users}
                onEditUser={handleEditUser} // Pass the edit handler
                onDeleteUser={(id) => setUsers(users.filter((user) => user.id !== id))} // Pass delete handler
            />
        </div>
    );
};

export default UserManagement;
