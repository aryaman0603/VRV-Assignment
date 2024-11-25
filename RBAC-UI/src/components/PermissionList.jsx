import React from "react";

const PermissionList = ({ permissions, onTogglePermission }) => {
    const availablePermissions = ["Read", "Write", "Delete"];

    return (
        <fieldset>
            <legend>Permissions:</legend>
            {availablePermissions.map((permission) => (
                <label key={permission}>
                    <input
                        type="checkbox"
                        checked={permissions.includes(permission)}
                        onChange={() => onTogglePermission(permission)}
                    />
                    {permission}
                </label>
            ))}
        </fieldset>
    );
};

export default PermissionList;
